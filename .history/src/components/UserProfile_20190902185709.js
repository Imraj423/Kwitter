// import React from "react";
// import Headliner from "./Header.js";
// import MediaCard from "./Card.js";
// import useStyles from "./LFStyle.js";
// import Container from "@material-ui/core/Container";
// import ErrorBoundary from "../ErrorBoundary/ErrBounds";
// import MessageList from "./GetMessages.js";
// import { FeedContent } from "semantic-ui-react";


// function LandingPage() {
//   const classes = useStyles();
//   return (
//     <Container>
//       <ErrorBoundary>
//         <Headliner className={classes.headliner} />
//       </ErrorBoundary>
      
//       <ErrorBoundary>
//         <MediaCard className={classes.mediacard} />
//       </ErrorBoundary>

//       <FeedContent>
//       <MessageList/>
//       </FeedContent>
//     </Container>
//   );
// }

// export default LandingPage;
import React, { Component } from "react";
import { connect } from "react-redux";
import {
  logoutThenGoToHomepage as logout,
  getUserProfileInfo,
  uploadPictureThenGetLoggedInUser as uploadPicture,
  updateUser,
  deleteUser
} from "../actions";
import { Link } from "react-router-dom";

class UpdateProfile2 extends Component {
  state = {
    password: "",
    about: "",
    displayName: ""
  };

  componentDidMount() {
    this.props.getUserProfileInfo(this.props.username);
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.username !== prevProps.username) {
      this.props.getUserProfileInfo(this.props.username);
    }
  }

  handleUploadPicture = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.props.uploadPicture(formData);
  };

  handleUpdateUser = event => {
    event.preventDefault();
    this.props.updateUser(this.state);
  };

  handleDeleteAccount = event => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      this.props.deleteUser();
    }
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const isOwnProfile = this.props.username === this.props.loggedInUsername;
    return (
     
        {!isOwnProfile && (
          <Link to={"/profile/" + this.props.loggedInUsername}>
            <button>My Profile</button>
          </Link>
        )}
        <Link to="/feed">
          <button>Message Feed</button>
        </Link>
        <button onClick={this.props.logout}>Logout</button>
        This is the user profile
        {/* <img
          alt="profile"
          src={
            "https://kwitter-api.herokuapp.com" +
            this.props.user.pictureLocation
          }
        /> */}
        {isOwnProfile && (
          <form onSubmit={this.handleUploadPicture}>
            <input name="Picture" type="file" />
            <button type="submit" >Upload Picture</button>
          </form>
        )}
        {isOwnProfile && (
         
            <button onClick={this.handleDeleteAccount}>Delete Account</button>
            <h2>Update your user info</h2>
            <form onSubmit={this.handleUpdateUser}>
              <label htmlFor="password">Password</label>
              <input type="text" name="password" onChange={this.handleChange} />
              <label htmlFor="about">About</label>
              <input type="text" name="about" onChange={this.handleChange} />
              <label htmlFor="displayName">Display Name</label>
              <input
                type="text"
                name="displayName"
                onChange={this.handleChange}
              />
              <button type="submit">Submit Updates</button>
            </form>
          
        )}
      
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.users.getUser,
    messages: state.messages.getUserMessages,
    loggedInUsername: state.auth.login.username
  };
};

export default connect(
  mapStateToProps,
  { logout, getUserProfileInfo, uploadPicture, updateUser, deleteUser }
)(UpdateProfile2);

