import React from "react";
import Headliner from "./Header.js";
import MediaCard from "./Card.js";
import useStyles from "./LFStyle.js";
import CommentExampleComment from "./Messages";
import GET_MESSAGES from "./actions/messages"
function LandingPage() {
  const classes = useStyles();
  return (
    <container>
      <Headliner className={classes.headliner} />

      <MediaCard className={classes.mediacard} />
      <GET_MESSAGES />
      <CommentExampleComment className={classes.feed} />
    </container>
  );
}

export default LandingPage;
