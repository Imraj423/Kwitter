import React, { Component } from "react";
import { connect } from "react-redux";
import { signupThenGoToSignPage as signup } from "../actions";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
// import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Background from './Logo1.png'




class SignUpForm extends Component {
  state = {
    username: "",
    displayName: "",
    password: ""
  };

  
  handleSignUp = e => {
    e.preventDefault();
    this.props.signup(this.state);
    
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container component="main" maxWidth="xs" style={{backgroundColor : "lightSkyBlue", height : "100vh"}}>
        <CssBaseline />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div>
            <img src={Background} alt="logo" />
          </div>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <p>Enter Information Below</p>
          <form onSubmit={this.handleSignUp}>
            <Grid container spacing={2} display="flex" justify="center">
              <Grid item xs={12} float="center">
                <TextField
                  variant="outlined"
                  type="text"
                  name="username"
                  label="User Name"
                  autoFocus
                  required
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "3, 0, 2"
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  type="text"
                  name="displayName"
                  autoFocus
                  required
                  onChange={this.handleChange}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "3, 0, 2"
                  }}
                  label="Display Name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={this.handleChange}
                />
                {/* <TextField 
                        type="text" 
                        name="password" 
                        required
                        onChange={this.handleChange}
                        style={{display:'flex', justifyContent: 'center', padding:'3, 0, 2'}}
                        label="Password"
                    /> */}
              </Grid>

              <Button
                type="submit"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "3, 0, 2"
                }}
              >
                Create Account
              </Button>
              <Grid container justify="center">
                <Grid item>
                  <Link href="/" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    );
  }

  // {err && <p style={{ color: "red" }}>{err.message}</p>}
  //{/* </React.Fragment> */}
}

const mapStateToProps = state => {
    return {
        isLoading: state.users.registerUserLoading,
        err: state.users.registerUserError
    };
}

export default connect(
    mapStateToProps,
    { signup }
)(SignUpForm);
