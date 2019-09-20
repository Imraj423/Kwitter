import React from "react";
import Headliner from "./Header.js";
import useStyles from "./LFStyle.js";
import Container from "@material-ui/core/Container";
import ErrorBoundary from "../ErrorBoundary/ErrBounds";
import UserBanner from "./UserList.js";
import FriendsList from "./FList";
function Tester() {
  const classes = useStyles();
  return (
    <Container>
      <ErrorBoundary>
        <Headliner className={classes.headliner} />
      </ErrorBoundary>
    <FriendsList/>
      
      <UserBanner />
    </Container>
  );
}

export default Tester;
