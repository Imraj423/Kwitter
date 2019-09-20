import React from "react";
import Headliner from "./Header.js";
import useStyles from "./LFStyle.js";
import Container from "@material-ui/core/Container";
import ErrorBoundary from "../ErrorBoundary/ErrBounds";
import UserBanner from "./UserList.js";
import Sidebar from "./"
function Tester() {
  const classes = useStyles();
  return (
    <Container>
      <ErrorBoundary>
        <Headliner className={classes.headliner} />
      </ErrorBoundary>
    <Sidebar/>
      
      <UserBanner />
    </Container>
  );
}

export default Tester;
