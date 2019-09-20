import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { loginThenGoToUserProfile as login } from "../actions";
import Container from '@material-ui/core/Container';
import Background from './Logo1.png'
import useStyles from'./LFStyle.js'
import { useDispatch } from 'react-redux'
import { Link } from '@material-ui/core';



function LoginForm() {
  ////const state = { username: "", password: "" };
  const classes = useStyles();
  const dispatch = useDispatch()
  const [username, setUsername]= useState("")
  const [password, setPassword] = useState("")
 



  const handleLogin = e => {
    e.preventDefault();
    dispatch(login({username: username, password: password}));
  };

  const handleUserNameChange = e => {
    setUsername(e.target.value)
    ////this.setState({ [e.target.name]: e.target.value });
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  };

  
  

  return (
    <Container component="main" maxWidth="xs" >
      <CssBaseline />
      <div className={classes.paper}>
        <div>
       
        <img src={Background} alt="logo" />
        </div>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
            onChange={handleUserNameChange}
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
            onChange={handlePasswordChange}
          />
         
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link onClick="{SURoute}" variant="body2">  
                {"Don't have an account? Sign Up"}
              </Link>
              {/* or "/Registration if signup doesn't work" */}
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}


export default LoginForm;



