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
//         <div id='main' style={{
//           background:"skyBlue",
//           color:'white',
//           height:"600px",
//           width:"700px",
//           border:"1px solid gray"
//         }}>
        
//         <div id="headerr"><h1> Kwitter</h1><hr /></div>
//         <form onSubmit={this.handleLogin} style={{
//           position:'relative',
//           top:"200px",
//           display:"flexbox",
//           justifyContent:"center"
//         }}><h2>Login</h2>
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
//         </div>
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



import React from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import useStyles from './Styles';






export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
              </Typography>
          <form className={classes.form} noValidate>
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
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In 
                </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                    </Link>
              </Grid> */}
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}


ReactDOM.render(<SignInSide />, document.querySelector("#app"));