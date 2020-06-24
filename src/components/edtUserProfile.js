import React, { Component } from "react";
import { getLoggedInUser, updateUser, uploadPicture } from "../actions";
import { connect } from "react-redux";
import { domain } from "../actions/constants";
// import { Form } from "react-bootstrap";

class A2b extends Component {
  state = {
    password: "",
    about: "",
    displayName: "",
  };

  componentDidMount() {
    this.props.getLoggedInUser();
  }

  handleUpdateUser = (event) => {
    event.preventDefault();
    this.props.updateUser(this.state);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleUploadPicture = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    this.props.uploadPicture(formData);
  };

  render() {
    return (
      <React.Fragment>
        <div
          style={{
            position: "absolute",
            top: "10%",
            left: "50%",
            marginTop: "-50px",
            marginLeft: "-50px",
            height: "50vh",
            width: "350px",
          }}
        >
          {/* <h2>Welcome!</h2> */}

          <img
            src={domain + this.props.user.pictureLocation}
            alt="Profile_Pic"
            width="130px"
            height="170px"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "space-between",
            }}
          >
            <h5 style={{ color: "red" }}>Username:</h5>{" "}
            <h5> {this.props.user.username}</h5>
            <h5 style={{ color: "red" }}>Display Name:</h5>{" "}
            <h5> {this.props.user.displayName}</h5>
            <h5 style={{ color: "red" }}>About:</h5>{" "}
            <h5>{this.props.user.about}</h5>
          </div>

          <h3 style={{ color: "blue" }}>Update Profile: </h3>
          <br />

          <form onSubmit={this.handleUploadPicture}>
            <input name="picture" type="file" />
            <button value="submit">Upload Picture</button>
          </form>
          <br />
          <form onSubmit={this.handleUpdateUser}>
            <label htmlFor="password"> Password </label>
            <br />
            <input type="text" name="password" onChange={this.handleChange} />
            <br />
            <label htmlFor="displayName"> Display Name </label>
            <br />
            <input
              type="text"
              name="displayName"
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="about"> About </label>
            <br />
            <input type="text" name="about" onChange={this.handleChange} />
            <br />
            <button type="submit"> Update Profile</button>
            <br />
            <br />
            <br />
          </form>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  //Only reading from state
  return {
    user: state.users.getUser,
  };
};

export default connect(
  mapStateToProps,
  { getLoggedInUser, updateUser, uploadPicture } //Only writing to state. Not reading
)(A2b);
