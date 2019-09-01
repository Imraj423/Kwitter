import React from "react";
import Headliner from "./Header.js";
import MediaCard from "./Card.js";
import useStyles from "./LFStyle.js";
import CommentExampleComment from "./MessageFeed";
import Button from '@material-ui/core/Button'
import {toggleLike} from "../actions/likes";
import {removeLike} from '../actions/likes'

function LandingPage() {
  const classes = useStyles();
  return (
    <container>
      <Headliner className={classes.headliner} />

      <MediaCard className={classes.mediacard} />

      <CommentExampleComment className={classes.feed} />
      <><Button onClick={toggleLike} onDoubleClick={removeLike}>Like</Button >
      {console.log(onClick)}
      </>
    </container>
  );
}

export default LandingPage;
