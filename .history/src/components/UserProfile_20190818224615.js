import React, { Component } from "react";
import Button from '@material-ui/core/Button';
const App = () => (
  <Button variant="contained" color="primary">
    Hello World
    </Button>
);
class UserProfile extends Component {
  render() {
    return <p>This is the user profile</p>;
  }
}

export default UserProfile;
