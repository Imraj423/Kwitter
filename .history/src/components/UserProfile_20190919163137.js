import React from "react";
import Headliner from "./Header.js";
import MediaCard from "./Card.js";
import useStyles from "./LFStyle.js";
import Container from "@material-ui/core/Container";
import ErrorBoundary from "../ErrorBoundary/ErrBounds";
import { MessageList } from "./GetMessages.js";
import { FeedContent } from "semantic-ui-react";


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

      <FeedContent>
      <MessageList/>
      </FeedContent>
       
    </Container>
  );
}

export default LandingPage;
