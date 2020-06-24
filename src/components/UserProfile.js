import React from "react";
import MediaCard from "./Card.js";
import useStyles from "./LFStyle.js";
import Container from "@material-ui/core/Container";
import ErrorBoundary from "../ErrorBoundary/ErrBounds";
import { MessageList } from "./GetMessages.js";
import { FeedContent } from "semantic-ui-react";
import { NavBar } from "./NavBar.js";
// import profile_pic from "./profilepic";

function LandingPage() {
  const classes = useStyles();
  return (
    <Container >
      <ErrorBoundary>
        <NavBar />
      </ErrorBoundary>

      <ErrorBoundary>
        <MediaCard className={classes.mediacard} />
        <profile_pic />
      </ErrorBoundary>

      <FeedContent >
        <MessageList />
      </FeedContent>
    </Container>
  );
}

export default LandingPage;
