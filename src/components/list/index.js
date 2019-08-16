import React from 'react'
import { connect } from 'react-redux'
//import { actionCreators } from './store'

import Appbar from '../../components/appbar'
import Sidebar from '../../components/sidebar'

function Mapindex() {
  return (
    <div >
      <Appbar />
      <Sidebar />
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