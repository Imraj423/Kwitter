import React from "react";
import { connect } from "react-redux";
import { registerUser } from "../actions";

class RegisterForm extends React.Component {
    state = {
        username: "",
        displayName: "",
        password: ""
    };

    handleRegister = e => {
        e.preventDefault();
        this.props.register(this.state);
    };

    handleChange = e => {
        this.setState({ [e.target.name]:
        e.target.value });
    };

    render() {
        //const { isLoading, err } = this.props;
        return (
            <>
            <h1>Register</h1>
            <form onSubmit=
            {this.handleRegister}>
                <label
                htmlFor="username">Username</label>
                <input
                type="text"
                name="username"
                onChange={this.handleChange}
                autoFocus
                required
                />
                <input
                type="text"
                name="displayName"
                onChange={this.handleChange}
                required
                />
                <input
                type="text"
                name="password"
                onChange={this.handleChange}
                required
                />
                <button type="submit">
                Register
                </button>
                </form>
                </>
        );
    }
}

const mapStateToProps = state => {
    return {
        isLoading:
        state.users.registerUserLoading,
        err: state.users.registerUserError
    };
};

export default connect(
    mapStateToProps,
    { registerUser }
)(RegisterForm);