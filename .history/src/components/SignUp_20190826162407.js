import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Background from '../Logo1.png'
import { signupThenGoToSignPage as signup } from "../actions/auth";
import { useDispatch } from 'react-redux'

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const [userName, setUsername] = useState('');
  const [displayName, setDisplayname] = useState('');
  const [password, setPassword] = useState('');
  //const [signUp, setSignup] = useState ('');

  const handleUserNameInput = e => {
    setUsername(e.target.value);
  };
  const handleDisplayNameInput = e => {
    setDisplayname(e.target.value);
  };
  const handlePasswordInput = e => {
    setPassword(e.target.value);
  }
   const handleSignUp = e => {
    e.preventDefault();
    dispatch(signup({userName: userName, displayName: displayName, password: password}));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
        <img src={Background} alt="logo" />
          
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>


{/* onSubmit={handleSignUp} */}

        <form  className={classes.form} noValidate >
          {/* <Grid container spacing={2}>
            <Grid item xs={12} sm={6}> */}
              <label htmlFor="userName">Username</label>
              <TextField
                autoComplete="userName"
                name="userName"
                variant="outlined"
                required
                fullWidth
                id="userName"
                label="userName"
                autoFocus
                onChange={handleUserNameInput}
              />
            {/* </Grid>
            <Grid item xs={12} sm={6}> */}
              <label htmlFor="displayName">Display Name</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="displayName"
                label="displayName"
                name="displayName"
                onChange={handleDisplayNameInput}
                
              />
            {/* </Grid>
            <Grid item xs={12}> */}
              <label htmlFor="password">Password</label>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handlePasswordInput}
                
              />
            {/* </Grid>
            
          </Grid> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSignUp}
            
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
  <Link href="/" variant="body2">
                {"Already have an account? Sign in"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



