import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import {  LoginForm, UserProfile, SignUpForm, } from ".";
// import { getMessages } from "../actions";
import  SignUp  from './SignUp.js'
import MessageList from "./GetMessages";
import CommentExampleComment from "./MessageFeed";



class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/profile" render={() => <UserProfile />} />

        <Route exact path="/testing" render={() => <SignUp />} />
        <Route exact path="/updateprofile" render={() => <CommentExampleComment />} />

        <Route exact path="/signup" render={() => <SignUpForm />} />
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