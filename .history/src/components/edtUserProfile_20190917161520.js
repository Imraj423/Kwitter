import React, { Component } from "react";
import { 
  getLoggedInUser, updateUser, uploadPicture
} from "../actions";
import { connect } from "react-redux";
import { domain } from "../actions/constants";



class A2b extends Component {
  state = {
    password: "",
    about: "",
    displayName: ""
  }

  componentDidMount() {
    this.props.getLoggedInUser();
  }

  handleUpdateUser = event => {
    event.preventDefault();
    this.props.updateUser(this.state);
  }

  handleChange = event => {
    this.setState( {
      [event.target.name]: event.target.value
    });
  };

  handleUploadPicture = event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.props.uploadPicture(formData);
  }



  render() {
    
    return (
      <React.Fragment>
        <p>
          <h2>This is the user profile. Welcome!</h2>
        </p>
        <img src={domain + this.props.user.pictureLocation} alt="Profile_Pic" />

        <p>
          <h3>Username: {this.props.user.username}</h3>
        </p>
        <p>
          <h3>Display Name: {this.props.user.displayName}</h3>
        </p>
        <p>
          <h3>About: {this.props.user.about}</h3>
        </p>

        <h3>Update Your Profile Info: </h3>
        <form onSubmit={this.handleUpdateUser}>
          <label htmlFor="password"> Password </label>
          <br />
          <input type="text" name="password" onChange={this.handleChange} />
          <br />
          <label htmlFor="displayName"> Display Name </label>
          <br />
          <input type="text" name="displayName" onChange={this.handleChange} />
          <br />
          <label htmlFor="about"> About </label>

          <br />
          <input type="text" name="about" onChange={this.handleChange} />

          <button type="submit"> Update Info</button>
          <br />
        </form>
        <br />
        <form onSubmit={this.handleUploadPicture}>
          <input name="picture" type="file" />
          <button value="submit" >Upload Picture</button><button value="Refresh Page" onClick="window.location.reload();">
        </form>

        <img src={domain + this.props.user.pictureLocation} alt="Profile_Pic" />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {//Only reading from state
  return {
    user: state.users.getUser
  }
}

export default connect(
  mapStateToProps,
  { getLoggedInUser, updateUser, uploadPicture}   //Only writing to state. Not reading
)(A2b);
