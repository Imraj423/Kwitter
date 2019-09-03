import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutThenGoToHomePage as logout } from "../actions";



class LogOutbtn extends Component {
    
  render() {
      
    return <div id='signoutbtn' style={{display:'flex'}}>
      <link href="http://localhost:3000/" style={{ backgroundColor:"lightskyblue"}}>LOGOUT</link>
    </div>
  }
}

export default connect(
  null,
  { logout }
)(LogOutbtn);