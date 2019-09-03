import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutThenGoToHomePage as logout } from "../actions";



class LogOutbtn extends Component {
    
  render() {
      
    return <div id='signoutbtn' style={{display:'flex'}}>
      <button href="/signin" style={{ backgroundColor:"lightskyblue"}}>LOGOUT</button>
    </div>
  }
}

export default connect(
  null,
  { logout }
)(LogOutbtn);