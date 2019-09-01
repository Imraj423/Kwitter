import React from 'react';
//import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './LFStyle.js'
import Background from './Logo1.png'
// import ShowMessages from './ShowMessages.js';
import Link from "@material-ui/core/Link";

import { useSelector } from "react-redux";


function MediaCard() {
  const classes = useStyles();
  const currentUsername = useSelector(state => state.auth.login.username);
  return (
    <CardActionArea className={classes.media} title="User Profile">
      <CardMedia className={classes.cm}>
        <img src={Background} alt="logo" />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h1">
            {currentUsername}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Software engineering student at Kenzie Academy in Indianapolis, IN
          </Typography>

          <CardActions>
            <Link href="/updateprofile" size="small" color="primary">
              PROFILE
            </Link>
            <Button size="small" color="primary">
              SUBSCRIBE
            </Button>
          </CardActions>
        </CardContent>
      </CardMedia>
    </CardActionArea>
  );
}



export default MediaCard