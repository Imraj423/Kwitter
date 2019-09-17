import React, { Component } from "react";
import { 
  getLoggedInUser, updateUser, uploadPicture
} from "../actions";
import { connect } from "react-redux";
import { domain } from "../actions/constants";


export class A2b extends Component {
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

        <p>This is the user profile. Welcome!</p>

        <p>Username: {this.props.user.username}</p>
        <p>Display Name: {this.props.user.displayName}</p>
        <p>About: {this.props.user.about}</p>

        <h3>Update Your Profile Info: </h3>
        <form onSubmit={this.handleUpdateUser}>
          <label htmlFor="password"> Password </label>
            <input 
            type="text" 
            name="password" 
            onChange={this.handleChange}/>
          <label htmlFor="displayName"> Display Name </label>
            <input 
            type="text" 
            name="displayName" 
            onChange={this.handleChange}/>
          <label htmlFor="about"> About </label>
            <input 
            type="text" 
            name="about" 
            onChange={this.handleChange}/>
          <button type="submit"> Update Info</button>
        </form>


        <form onSubmit={this.handleUploadPicture}>
          <input name="picture" type="file" />
          <button type="submit">Upload Picture</button>
        </form>

        <img src={domain + this.props.user.pictureLocation} alt="Profile_Pic"/>


      </React.Fragment>

    )
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
