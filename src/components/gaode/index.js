import React from 'react'
import { connect } from 'react-redux'
import { Map, InfoWindow, Marker } from 'react-amap'
//import { actionCreators } from './store'

const pluginProps = {
  enableHighAccuracy:true,
  timeout: 10000,
  showButton: true
}

let walk = null
let transfer = null

class UIMarker extends React.Component {
  constructor(props) {
    super(props)
    this.loadUI()
  }

  loadUI() {
    window.AMapUI.loadUI(['overlay/SimpleMarker'], (SimpleMarker) => {
      this.initPage(SimpleMarker)
    })
  }

  geticonLabel(cat, label){
  	if(cat === '0'){
  		return {
  			label,
  			iconTheme: 'default',
  			iconStyle: 'red'
  		}
  	} else if(cat === '1') {
  		return {
  			iconLabel: 'F',
  			iconTheme: 'numv1',
  			iconStyle: 'blue'
  		}
  	} else {
  		return {
  			iconLabel: 'H',
  			iconTheme: 'numv2',
  			iconStyle: 'black'
  		}
  	}
  }

  initPage(SimpleMarker) {
    let uimarker = new SimpleMarker({
        iconLabel: this.geticonLabel(this.props.cat, this.props.label).label,
        iconTheme: this.geticonLabel(this.props.cat, this.props.label).iconTheme,
        iconStyle: this.geticonLabel(this.props.cat, this.props.label).iconStyle,
        map: this.props.__map__,
        position: this.props.position
    })
  
    uimarker.on('click', () => {
    	if(this.props.cat === '0') {
    		this.props.testMobx.openinfoWindow(this.props.index)
    	} else if(this.props.cat === '1'){
    		this.props.testMobx.openDinnerinfoWindow(this.props.index)
    	}
      
    })
  }

  render() {
    return null
  }
}

class Geolocation extends React.Component {
  constructor(props) {
    super(props)
    if (typeof window !== 'undefined') {
      if (!props.__map__) {
        throw new Error('Geolocation has to be a child of Map component')
      } else {
        this.map = props.__map__
        this.element = props.__ele__

        this.resolveGeolocation(props).then(() => {
          this.triggerCreated(props)
          this.map.addControl(this.geolocation)
          this.geolocation.getCurrentPosition()
          window.AMap.event.addListener(this.geolocation, 'complete', (data) => {
          	let myPosition = [data.position.getLng(),data.position.getLat()]
  					//this.props.testMobx.setMyself(myPosition)
          })
    			window.AMap.event.addListener(this.geolocation, 'error', (data) => {
    				console.log(data)
    				alert('高德地图定位失败，请刷新页面！')
    			}) 
        })
      }
    }
  }

  shouldComponentUpdate() {
    return false
  }

  resolveGeolocation(props){
    if (this.geolocation) {
      return new Promise((resolve) => {
        resolve(this.geolocation)
      })
    } else {
      return new Promise((resolve) => {
        this.map.plugin(['AMap.Geolocation'], () => {
          this.geolocation = new window.AMap.Geolocation(props)
          resolve(this.geolocation)
        })
      })
    }
  }

  triggerCreated(props) {
    const events = props.events || {}
    if (('created' in events) && (typeof events.created === 'function')) {
      events.created(this.geolocation)
    }
  }

  render(){
    return null
  }
}

class DirectionsRenderer extends React.Component {
	constructor(props) {
	  super(props)
	  const map = props.__map__
		window.AMap.service('AMap.Walking', () => {
	  	walk = new window.AMap.Walking({map: map})
		})
		window.AMap.service('AMap.Transfer', () => {
		  transfer = new window.AMap.Transfer({map: map})	
		})
	}

	shouldComponentUpdate() {
    return false
  }
	  
  render(){
    return null
  }
}

function MapApp (props) {
  return (
		<div style={{width: '100%', height: '100%'}}>
      <Map 
      	amapkey={'fbe59813637de60223e3d22805a2486c'}
      	zoom={15}
      	resizeEnable={true}
    		mapStyle={'fresh'}
    		useAMapUI
      >
      	<Geolocation {...pluginProps} />
      	<DirectionsRenderer />
      </Map>
    </div>
  )
}

// const mapState = ({indexReducer}) => {
//   return {
//     data: indexReducer.text
//   } 
// }

// const mapDispatch = (dispatch) => {
//   return {
//     test(){
//       dispatch(actionCreators.test(1))
//     },
//   }
// }

export default connect(null, null)(MapApp)
