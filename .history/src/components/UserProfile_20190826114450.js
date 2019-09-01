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
      <getLoggedInUserMessages 
      style={{
        border:'1px solid black', 
        height: '40px', 
        width: '150px',
        position: 'relative',
        top: '150px',
        left: '150px'
        }}/>
      {/* <CommentExampleComment className={classes.feed} /> */}
    </container>
  );
}

export default LandingPage;
