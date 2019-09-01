import React, { Component } from "react";

import { connect } from "react-redux";

import { signupThenGoToLogIn as signup } from "../actions";

import Spinner from "react-spinkit";

class SignUpForm extends Component {

    state = {

        username: "",

        displayName: "",

        password: ""

    };

    handleSignUp = event => {

        event.preventDefault();

        this.props.signup(this.state);

    }

    handleChange = event => {

        this.setState({ [event.target.name]: e.target.value });

    };

    render() {

        return (

            <React.Fragment>

                <h1>SignUp Page!</h1>

                <form onSubmit={this.handleSignUp}>

                    <label htmlFor="username">username</label>

                    <input

                        type="text"

                        name="username"

                        autoFocus

                        required

                        onChange={handleChange}

                    />

                    <label htmlFor="displayName">displayName</label>

                    <input

                        type="displayName"

                        name="displayName"

                        required

                        onChange={this.handleChange}

                    />

                    <label htmlFor="password">Password</label>

                    <input

                        type="password"

                        name="password"

                        required

                        onChange={this.handleChange}

                    />

                    <button type="submit" disabled={isLoading}>

                        Sign Up!
                        
</button>

                </form>

                {isLoading && <Spinner name="circle" color="green" />}

                {err && <p style={{ color: "orange" }}></p>}

            </React.Fragment>

        );

    }

}

export default connect(

    { signup }

)(SignUpForm);