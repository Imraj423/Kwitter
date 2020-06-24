import React from "react";
import Container from "@material-ui/core/Container";
import ErrorBoundary from "../ErrorBoundary/ErrBounds";
import FriendsList from "./FList";
import { NavBar } from "./NavBar.js";

function Tester() {
  return (
    <Container style={{width:"100vw"}}>
      <ErrorBoundary>
        <NavBar/>
      </ErrorBoundary>
    <FriendsList/>

    </Container>
  );
}

export default Tester;
