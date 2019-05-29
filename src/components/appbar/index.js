import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Input from '@material-ui/core/Input'
import AccountCircle from '@material-ui/icons/AccountCircle'
import InputAdornment from '@material-ui/core/InputAdornment'

import { actionCreators as sidebarActionCreators } from '../sidebar/store'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  input: {
    color: 'inherit',
  },
}));

function ButtonAppBar({toggleDrawer}) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <div edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </div>
          <Typography variant="h6" className={classes.title}>
            NextSticker
          </Typography>
          <IconButton 
            color="inherit"
            onClick={toggleDrawer}
          >
            <AccountCircle />
          </IconButton>
          <IconButton 
            color="inherit"
            onClick={toggleDrawer}
          >
            <AccountCircle />
          </IconButton>
          <IconButton 
            color="inherit"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <div >
            <Input
              placeholder="Tap Your TipNo. Here"
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapState = ({appbarReducer}) => {
  return {
    isOpen: appbarReducer.isOpen
  } 
}

const mapDispatch = (dispatch) => {
  return {
    toggleDrawer(){
      dispatch(sidebarActionCreators.switchBar())
    },
  }
}

export default connect(mapState, mapDispatch)(ButtonAppBar)