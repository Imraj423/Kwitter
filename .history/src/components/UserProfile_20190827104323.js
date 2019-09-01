import React from "react";
import Headliner from "./Header.js";
import MediaCard from "./Card.js";
import useStyles from "./LFStyle.js";
import CommentExampleComment from "./MessageFeed";
import Button from '@material-ui/core'


function LandingPage() {
  const classes = useStyles();
  return (
    <container>
      <Headliner className={classes.headliner} />

      <MediaCard className={classes.mediacard} />

      <CommentExampleComment className={classes.feed} />
      <Button onClick={toggleLike}>Like</Button>

      <Button onClick={removeLike}>Unlike</Button>
    </container>
  );
}

export default LandingPage;
