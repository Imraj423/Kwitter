import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../actions";
import Container from '@material-ui/core/Container';
import Background from '../Logo1.png'
import classes from'./LFStyle'




export class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };}
export const  SignIn =()=> {
  
  

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{
        //marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'}}>
        <div>
        {/* <LockOutlinedIcon /> */}
        <img src={Background} alt="logo" />
        </div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={this.handleLogin}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={this.handleChange}
          />
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
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(LoginForm);




// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { loginThenGoToUserProfile as login } from "../actions";
// import Spinner from "react-spinkit";

// class LoginForm extends Component {
//   state = { username: "", password: "" };

//   handleLogin = e => {
//     e.preventDefault();
//     this.props.login(this.state);
//   };

//   handleChange = e => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   render() {
//     const { isLoading, err } = this.props;
//     return (
//       <React.Fragment>
//         <h1>Login</h1>
//         <form onSubmit={this.handleLogin}>
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             name="username"
//             autoFocus
//             required
//             onChange={this.handleChange}
//           />
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             name="password"
//             required
//             onChange={this.handleChange}
//           />
//           <button type="submit" disabled={isLoading}>
//             Login
//           </button>
//         </form>
//         {isLoading && <Spinner name="circle" color="blue" />}
//         {err && <p style={{ color: "red" }}>{err}</p>}
//       </React.Fragment>
//     );
//   }
// }

// export default connect(
//   ({ auth }) => ({
//     isLoading: auth.loginLoading,
//     err: auth.loginError
//   }),
//   { login }
// )(LoginForm);
