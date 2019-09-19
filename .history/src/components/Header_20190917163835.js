import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import NotificationIcon from '@material-ui/icons/Notifications';
import MessageIcon from '@material-ui/icons/MessageOutlined';
//import LongTextSnackbar from './Snack'
import LogOutbtn from './Logoutbtn'
import { MessageList } from './GetMessages';
import PeopleIcon from "@material-ui/icons/People";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: '100vw',
    backgroundColor:"lightskyblue"
  },
});

function IconLabelTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Paper square className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        aria-label="icon label tabs example"
      >
       
        <Tab icon={<HomeIcon />} label="HOME" href = "/profile" />
        {/* <Tab icon={<FavoriteIcon />} label="FAVORITES" />
        <Tab icon={<NotificationIcon />} label="NOTIFICATIONS" /> */}
        <Tab icon={<PeopleIcon />} label="USERS" onClick={MessageList} />
        <LogOutbtn />
      </Tabs>
    </Paper>
  );
}
export default IconLabelTabs
