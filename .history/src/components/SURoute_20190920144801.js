import React from "react";
import { Redirect } from "react-router-dom";


class SURoute extends React.Component {
  state = {
    redirect: false
  };
  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/SignUp" />;
    }
  };
  render() {
    return (
      <div>
        {this.renderRedirect()}
        <button onClick={this.setRedirect}>Sign Up!</button>
      </div>
    );
  }
}
export default SURoute