import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'

function Mapindex(props) {
  return (
    <div onClick={props.test}>
      helloworld!{props.data}
    </div>
  )
}

const mapState = ({indexReducer}) => {
  return {
    data: indexReducer.text
  } 
}

const mapDispatch = (dispatch) => {
  return {
    test(){
      dispatch(actionCreators.test(1))
    },
  }
}

export default connect(mapState, mapDispatch)(Mapindex)