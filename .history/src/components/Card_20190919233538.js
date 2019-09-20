import React, { useState }from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import useStyles from './LFStyle.js'
import Background from './Logo1.png'
import { Link }from "react-router-dom";
import { useSelector } from "react-redux";
import { updateUser } from "../actions";



function MediaCard() {
 
  const classes = useStyles();
  const currentUsername = useSelector(state => state.auth.login.username);
 const bio = useSelector(state.auth.component.updateUser.about)
  return (
    <CardActionArea className={classes.media} title="User Profile">
      <CardMedia className={classes.cm}>
        <img src={Background} alt="logo" />
        <CardContent>
          <Typography gutterBottom variant="h3" component="h1">
            {currentUsername}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
            Software engineering student at Kenzie Academy in Indianapolis, IN
          </Typography> */}

          <CardActions>
            <Link href="/edit" size="small" color="primary">
              PROFILE
            </Link>
            <div className={classes.hLinks}>
              <a href="https://www.facebook.com" className={classes.ilink}>Facebook</a>
              <br />
              <br />
              <a href="https://www.linkedin.com" className={classes.ilink}>LinkedIn</a>
              <br />
              <br />
              <a href="https://www.instagram.com" className={classes.ilink}>Instagram</a>
              <br />
              <br />
            </div>
          </CardActions>
        </CardContent>
      </CardMedia>
    </CardActionArea>
  );
}



export default MediaCard