import React from "react";
import Headliner from "./Header.js";
import MediaCard from "./Card.js";
import useStyles from "./LFStyle.js";
import Container from "@material-ui/core/Container";
//import MessagesList from "./MessageList";
import ErrorBoundary from "../ErrorBoundary/ErrBounds";

function LandingPage() {
  const classes = useStyles();
  return (
    <Container>
      <ErrorBoundary>
        <Headliner className={classes.headliner} />
      </ErrorBoundary>

      <ErrorBoundary>
        <MediaCard className={classes.mediacard} />
      </ErrorBoundary>

      {/* <ErrorBoundary>
        <MessagesList />
      </ErrorBoundary> */}
    </Container>
  );
}

export default LandingPage;
//  <CommentExampleComment className={classes.feed} />
//       {/* <><Button onClick={toggleLike} onDoubleClick={removeLike}>Like</Button > */}

//import CommentExampleComment from "./MessageFeed";
// import Button from '@material-ui/core/Button'
// import {toggleLike} from "../actions/likes";
// import {removeLike} from '../actions/likes'
// import MessageList from "./GetMessages.js";
//import { getUserMessages } from "../actions/index.js";
