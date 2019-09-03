// import React, { Component } from 'react'
// import { uploadPicture } from '../actions';

// class EditProfile extends Component {
//     state = {
//         selectedFile:null
//     }
//     fileSelectedHandler = event => {
//         // console.log(event.target.files[0])
//         this.setState({
//             selectedFile: event.target.files[0]
//         })
//     }

//     fileUploadHandler =() => {
        
//     }
//     render() {
//         return(
//             <div className="pic">
//                 <input type="file" onChange={this.fileSelectedHandler}/>
//                 <button onClick={uploadPicture}>Upload</button>
//             </div>
//         )
//     }
// }
// export default EditProfile;

import React, { Component } from "react";
import { connect } from "react-redux";
import {
  logoutThenGoToHomepage as logout,
  getUserProfileInfo,
  uploadUserPictureThenGetLoggedInUser as uploadPicture,
  updateUser,
  deleteUser
} from "../actions";
import { Link } from "react-router-dom";


class UserProfile extends Component {
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
      <>
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
            <input name="picture" type="file" />
            <button type="submit">Upload Picture</button>
          </form>
        )}
        <p>Username: {this.props.user.username}</p>
        <p>Display Name: {this.props.user.displayName}</p>
        <p>About: {this.props.user.about}</p>
        <p>Created: {new Date(this.props.user.createdAt).toDateString()}</p>
        <p>Updated: {new Date(this.props.user.updatedAt).toDateString()}</p>
        {isOwnProfile && (
          <>
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
          </>
        )}
        
      </>
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
)(UserProfile);
