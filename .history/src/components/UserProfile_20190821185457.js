
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './LFStyle.js'
import Background from '../Logo1.png'
//import BottomAppBar from './Feed.js';
import FullWidthGrid from './Grid';
import Headliner from 'Header.js'

function MediaCard() {
  const classes = useStyles();

  return (
    <div>
    <Headliner />
    </div>
    <container className={classes.container}>
    <Card className={classes.card} >
      <CardActionArea >
        <CardMedia
          className={classes.media}
          
        title="User Profile" ><img src={Background} alt="logo" /></CardMedia>
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Imraj Dhillon
          
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
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
    {/* <BottomAppBar /> */}
    <FullWidthGrid />
    </container>
    
  );
}


export default MediaCard