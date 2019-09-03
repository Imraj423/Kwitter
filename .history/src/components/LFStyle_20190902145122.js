
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor:"lightskyblue"
      //theme.palette.common.white
    }
  },
  root:{
      backgroundColor:"lightskyblue"
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  },
  card: {
    maxWidth: "345px",
    backgroundColor: "lightBlue",
    position: "relative",
    top: "100px",
    left: "40px"
  },
  media: {
    display: "flex",
    justifyContent: "center",
    height: "400px",
    width: "30vw",
    alignContent: "center",
    backgroundColor: "lightskyblue"
  },
  cm: {
    display: "flex",
    justifyContent: "flexstart",
    height: "400px",
    width: "30vw",
    float: "left",
    position: "relative",
    left:"0"
  },
  container: {
    height: "40vh",
    width: "300px",
    display: "flex",
    direction: "column",
    justify: "flex-start",
    alignItems: "flex-start"
  },
  feed: {
    float: "right"
  },
  hLinks: {
      position:"relative",
      display:"block",
      left:"275%",
      bottom:"280px"
  }
}));
export default useStyles