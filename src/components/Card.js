import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import useStyles from "./LFStyle.js";
import user from "./user1.jpg";
import { Link } from "@material-ui/core";
import { useSelector } from "react-redux";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
// import { domain } from "../actions/constants";

// import Icon from "@material-ui/core/Icon";
//import { styles } from "./FList.js";
//mport { domain } from "../actions/constants/index.js";

export default function MediaCard() {
  const classes = useStyles();
  const currentUsername = useSelector(state => state.auth.login.username);
 //const profilePic = useSelector(state => state.users.pictureLocation)

  

  return (
    <CardActionArea className={classes.media} title="User Profile">
      <CardMedia className={classes.cm}>
        <img src={user} alt="logo" />
        
        <CardContent>
          <Typography gutterBottom variant="h3" component="h1">
            {currentUsername}
          </Typography>

          <CardActions>
            <Link href="/edit" size="small" color="primary">
              PROFILE
            </Link>
            <div className={classes.hLinks}>
              <a href="https://www.facebook.com" className={classes.ilink}>
                <FacebookIcon />
              </a>
              <br />
              <br />
              <a href="https://www.linkedin.com" className={classes.ilink}>
                <LinkedInIcon />
              </a>
              <br />
              <br />
              <a href="https://www.instagram.com" className={classes.ilink}>
                <InstagramIcon />
              </a>
              <br />
              <br />
            </div>
          </CardActions>
        </CardContent>
      </CardMedia>
    </CardActionArea>
  );
}
