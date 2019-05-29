import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'

import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Panel from '../panelinsidebar'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

function AppMiniBar () {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit">
          My Route
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

function TemporaryDrawer({isOpen, close}) {
  const classes = useStyles()
  return (
    <div>
      <Drawer anchor="right" open={isOpen} onClose={close}>
        <div className={classes.list}>
          {AppMiniBar()}
          <Panel />
        </div>
      </Drawer>
    </div>
  )
}

const mapState = ({sidebarReducer}) => {
  return {
    isOpen: sidebarReducer.isOpen
  } 
}

const mapDispatch = (dispatch) => {
  return {
    close(){
      dispatch(actionCreators.switchBar())
    },
  }
}

export default connect(mapState, mapDispatch)(TemporaryDrawer)