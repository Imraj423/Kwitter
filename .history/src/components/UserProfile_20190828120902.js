import React from "react";
import Headliner from "./Header.js";
// import MediaCard from "./Card.js";
import useStyles from "./LFStyle.js";
//import CommentExampleComment from "./MessageFeed";
// import Button from '@material-ui/core/Button'
// import {toggleLike} from "../actions/likes";
// import {removeLike} from '../actions/likes'
import Container from "@material-ui/core/Container";
import { ShowMessages } from "./index.js";


function LandingPage() {
  const classes = useStyles();
  return (
    <Container>
      <Headliner className={classes.headliner} />

      {/* <MediaCard className={classes.mediacard} /> */}
      <ShowMessages />
      {/* <CommentExampleComment className={classes.feed} /> */}
      {/* <><Button onClick={toggleLike} onDoubleClick={removeLike}>Like</Button > */}
      
    
    </Container>
  );
}

export default LandingPage;
