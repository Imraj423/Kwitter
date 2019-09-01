import React from "react";
import Headliner from "./Header.js";
import MediaCard from "./Card.js";
import useStyles from "./LFStyle.js";
//import CommentExampleComment from "./Inbox/Messages";
import Getmessages from "./actions/messages";

function LandingPage() {
  const classes = useStyles();
  return (
    <container>
      <Headliner className={classes.headliner} />

      <MediaCard className={classes.mediacard} />

      <Getmessages className={classes.feed} />
    </container>
  );
}

export default LandingPage;
