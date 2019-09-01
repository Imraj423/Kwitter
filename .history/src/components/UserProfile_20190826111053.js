import React from "react";
import Headliner from "./Header.js";
import MediaCard from "./Card.js";
import useStyles from "./LFStyle.js";
import CommentExampleComment from "./Inbox/Messages";

function LandingPage() {
  const classes = useStyles();
  return (
    <container>
      <Headliner className={classes.headliner} />

      <MediaCard className={classes.mediacard} />

      <CommentExampleComment className={classes.feed} />
    </container>
  );
}

export default LandingPage;
