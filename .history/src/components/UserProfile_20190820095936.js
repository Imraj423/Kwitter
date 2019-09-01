// import React, { Component } from "react";


// class UserProfile extends Component {
//   render() {
//     return 
//     <div id="container">

//     </div>
//   } 
// }

// export default UserProfile;
import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './LFStyle.js'
import Background from '../Logo1.png'

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} style={{ backgroundColor: "lightBlue" }}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          
        title="Contemplative Reptile" style={{backgroundColor:"lightBlue"}}><img src={Background} alt="logo" /></CardMedia>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Imraj Dhillon
          
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{ backgroundColor: "lightBlue" }}>
            Software engineering student at Kenzie Academy in Indianapolis, IN
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          PROFILE
        </Button>
        <Button size="small" color="primary">
          SUBSCRIBE
        </Button>
      </CardActions>
    </Card>
  );
}