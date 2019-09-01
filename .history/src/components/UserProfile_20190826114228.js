import React from "react";
import Headliner from "./Header.js";
//import MediaCard from "./Card.js";
import useStyles from "./LFStyle.js";
//import CommentExampleComment from "./MessageFeed";
import { getLoggedInUserMessages } from "../actions/index.js";



function LandingPage() {
  const classes = useStyles();
  return (
    <container>
      <Headliner className={classes.headliner} />

      {/* <MediaCard className={classes.mediacard} /> */}
      <getLoggedInUserMessages style={{border:'1px solid black'}}/>
      {/* <CommentExampleComment className={classes.feed} /> */}
    </container>
  );
}

export default LandingPage;
