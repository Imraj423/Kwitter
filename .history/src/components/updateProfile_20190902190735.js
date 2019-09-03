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
// // export default EditProfile;



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
import { Input, Button } from "@material-ui/core";
import { Label, Form } from "semantic-ui-react";


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
      <>
        {!isOwnProfile && (
          <Link to={"/profile/" + this.props.loggedInUsername}>
            <button>My Profile</button>
          </Link>
        
        <Link to="/feed">
          <button>Message Feed</button>
        </Link>
        <button onClick={this.props.logout}>Logout</button>
        This is the user profile
        {/* <img
          alt="profile"
          src={
            "https://kwitter-api.herokuapp.com" +
            this.props.user.picture
          }
        /> */}
        
          <form onSubmit={this.handleUploadPicture}>
            <input name="Picture" type="file" />
            <button type="submit">Upload Picture</button>
          </form>
        
        
        
          
            <Button onClick={this.handleDeleteAccount}>Delete Account</Button>
           
            <Form onSubmit={this.handleUpdateUser}>
              <Label htmlFor="password">Password</Label>
              <Input type="text" name="password" onChange={this.handleChange} />
              <Label htmlFor="about">About</Label>
              <Input type="text" name="about" onChange={this.handleChange} style={{border:"1px solid black"}}/>
              <Label htmlFor="displayName">Display Name</Label>
              <Input
                type="text"
                name="displayName"
                onChange={this.handleChange}
              />
              <Button type="submit">Submit Updates</Button>
            </Form>
          
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
)(UpdateProfile2);
