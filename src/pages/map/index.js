import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
//import { actionCreators } from './store'

import Appbar from '../../components/appbar'
import Sidebar from '../../components/sidebar'
//import Gaode from '../../components/gaode'
import Google from '../../components/google'

const useStyles = makeStyles(theme => ({
  mapContainer: {
		position: 'absolute',
  	top: 64,
  	bottom: 0,
  	right:0,
  	left:0,
  }
}));

function Mapindex() {
	const classes = useStyles()
  return (
    <div>
      <Appbar />
      <Sidebar />
      <div className={classes.mapContainer}>
      	<Google />
      </div>
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

export default connect(null, null)(Mapindex)