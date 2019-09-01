import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { UserProfile } from ".";
import {LoginForm} from "./LoginForm.ts"
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => <LoginForm />} />
        <Route exact path="/profile" render={() => <UserProfile />} />
        <Route exact path="/registration" render={() => <UserProfile />} />
      </Switch>
    );
  }
}

export default App;
