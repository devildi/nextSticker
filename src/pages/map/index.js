import React from 'react'
import { connect } from 'react-redux'

function Mapindex(props) {
  return (
    <div onClick={props.fatchData}>
      helloworld!
    </div>
  )
}

const mapDispatch = (dispatch) => {
  return {
    fatchData(){
      //dispatch(actionCreators.fatchData())
      alert('Welcome!!!')
    },
  }
}

export default connect(null, mapDispatch)(Mapindex)