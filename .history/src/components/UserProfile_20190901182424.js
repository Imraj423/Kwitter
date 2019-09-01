import React from "react";
import Headliner from "./Header.js";
import MediaCard from "./Card.js";
import useStyles from "./LFStyle.js";
import {Container, Content } from "react-native";
import ErrorBoundary from "../ErrorBoundary/ErrBounds";
import MessageList from "./GetMessages.js";

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

      <Content>
      <MessageList/>
      </Content>
    </Container>
  );
}

export default LandingPage;
