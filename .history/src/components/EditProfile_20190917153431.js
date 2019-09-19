import React from "react";
import Headliner from "./Header.js";
import Container from "@material-ui/core/Container";
import classes from "*.module.scss";
import A2b from "./edtUserProfile";

function EditProfile() {
  return (
    <Container>
      <Headliner className={classes.headliner} />
      <A2b />
    </Container>
  );
}

export default EditProfile;