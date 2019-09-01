
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
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
    alignContent: "center"
  },
  cm: {
    display: "flex",
    justifyContent: "center",
    height: "400px",
    width: "10vw",
    alignContent: "center"
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
  }
}));
export default useStyles