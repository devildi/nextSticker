import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
const { compose, withProps} = require("recompose")
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer
} = require("react-google-maps")

//import MarkerMe from './Markers'

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAJHnZaO6czTIkkftjQNdtNcjL52pMxsIY&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <GoogleMap
    defaultZoom={13}
    defaultCenter={props.center}
    center={props.center}
  >	
		<Marker 
			position={props.whereAmI}
		/>
    {props.directions && <DirectionsRenderer directions={props.directions} />}
  </GoogleMap>
)

class Google extends React.Component {

  componentDidMount() {
    this.props.location()
  }

  render() {
    return (
      <MyMapComponent
      	center={{ lat: 41.5807212459, lng: 123.4927212587 }}
        points={{ lat: 41.5807212459, lng: 123.4927212587 }}
      />
    )
  }
}

const mapState = ({indexReducer}) => {
  return {

  } 
}

const mapDispatch = (dispatch) => {
  return {
    location(){
      console.log('99')
      dispatch(actionCreators.location())
    },
  }
}

export default connect(mapState, mapDispatch)(Google)