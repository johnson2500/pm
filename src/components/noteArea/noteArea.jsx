import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MDEditor from '@uiw/react-md-editor';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props) {
  const {
    children, value, index,
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function SimpleTabs() {
  const classes = useStyles();
  const [md, setmd] = React.useState('**Hello world!!!**');
  const [value, setValue] = React.useState('**Hello world!!!**');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Item One" />
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <MDEditor
          value={md}
          onChange={setmd}
          style={{ height: '100vh' }}
        />
        <MDEditor.Markdown source={value} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MDEditor
          value={md}
          onChange={setmd}
          style={{ height: '100vh' }}
        />
        <MDEditor.Markdown source={md} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MDEditor
          value={md}
          onChange={setmd}
          style={{ height: '100vh' }}
        />
        <MDEditor.Markdown source={md} />
      </TabPanel>
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
