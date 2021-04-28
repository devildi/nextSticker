import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import { makeStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import data from '../../data'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maiginTop: 0,
    maiginLeft: 0,
    backgroundColor: theme.palette.background.paper,
  }
}));

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

function CustomizedExpansionPanels() {
  const [expanded, setExpanded] = React.useState('');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <div >
      {
        data.map((item, index) => (
          <ExpansionPanel key={index} square expanded={expanded === index} onChange={handleChange(index)}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
              <Typography>Day {index + 1}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <List className={classes.root} component="nav" aria-label="Secondary mailbox folders">
                {
                  item.map((r,i) => (
                    <ListItem button key={i}>
                      <ListItemText primary={r.name} />
                    </ListItem>
                  ))
                }
              </List>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))
      }
    </div>
  );
}

export default CustomizedExpansionPanels