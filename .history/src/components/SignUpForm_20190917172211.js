import React, { Component } from "react";
import { connect } from "react-redux";
import { signupThenGoToSignPage as signup } from "../actions";
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Background from './Logo1.png'
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


class SignUpForm extends Component {
    state = { 
        username: "",
        displayName: "",
        password: "" 
    };
  
 handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();



    handleSignUp = e => {
        e.preventDefault();
        this.props.signup(this.state);
      };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };

    render() {
        
        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <Avatar>
                <img src={Background} alt="logo" />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <p>Enter Information Below</p>
              <form onSubmit={this.handleSignUp}>
                <Grid container spacing={2} display="flex" justify="center">
                  <Grid item xs={12} float="center">
                    <TextField
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
                    <FormControl
                      
                    >
                      <InputLabel htmlFor="adornment-password">
                        Password
                      </InputLabel>
                      <Input
                        id="adornment-password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={this.handleChange("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={this.handleClickShowPassword}
                              onMouseDown={this.handleMouseDownPassword}
                            >
                              {values.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                      />
                    </FormControl>
                    {/* <InputAdornments/> */}
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
        );}
               
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
