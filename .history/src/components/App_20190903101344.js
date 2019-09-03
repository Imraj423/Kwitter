import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {  LoginForm, UserProfile, SignUpForm } from ".";

//import UpdateProfile2 from "./updateProfile";
// import ComposeMessage from './CreateMessage'







class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/profile" render={() => <UserProfile />} />

        <Route exact path="/signup" render={() => <SignUpForm />} />
   

        {/* <Route exact path="/test" render={() => <ShowMessages />} /> */}
      </Switch>
    );
  }
}

export default App;


//no redux.
/*
just a post request to send it to the api. No redux
 <Route exact path="/registration" render={() => <SignUp />} />import SignUp from './SignUp'
also have a button linked to a component
all the component does is use push("/login")
*/