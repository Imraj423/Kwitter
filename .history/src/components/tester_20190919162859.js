import React from "react";
import Headliner from "./Header.js";
import useStyles from "./LFStyle.js";
import Container from "@material-ui/core/Container";
import ErrorBoundary from "../ErrorBoundary/ErrBounds";
import FriendsList from "./FList";
function Tester() {
  const classes = useStyles();
  return (
    <Container>
      <ErrorBoundary>
        <Headliner className={classes.headliner} />
      </ErrorBoundary>
    <FriendsList/>

    </Container>
  );
}

export default Tester;
