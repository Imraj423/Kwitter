import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {  LoginForm, UserProfile, SignUpForm } from ".";
import A2b  from "./edtUserProfile.js";

//import UpdateProfile2 from "./updateProfile";
// import ComposeMessage from './CreateMessage'







class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/profile" render={() => <UserProfile />} />

        <Route exact path="PUBLIC_URL/signup" render={() => <SignUpForm />} />
   

        <Route exact path="/edt" render={() => <A2b />} />
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