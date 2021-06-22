import {
  AppBar,
  Container,
  makeStyles,
  Paper,
  Toolbar,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    color: "#FF81A6",
    textAlign: "left",
    fontFamily: "Ruthie",
    fontSize: "48px",
    fontWeight: "300",
    textDecoration: "none",
  },
  link: {
    color: "#FF81A6",
    marginRight: theme.spacing(5),
    fontFamily: "montserrat",
    fontSize: "24px",
    fontWeight: "thin",
    letterSpacing: "0.1rem",
    textDecoration: "none",
  },
  appbar: {
    background: "#FFFFFF",
    position: "fixed",
  },
  toolbar: {
    minHeight: 110,
  },
  image: {
    backgroundSize: "100px 100%",
    width: "100vw",
    position: "fixed",
    // verticalAlign: "bottom",
  },
  topContainer: {
    textAlign: "center",
  },
  title: {
    fontFamily: "Ruthie",
    position: "absolute",
    color: "white",

    // height: "70%",
    top: "16%",
    // left: "40%",
    // top: "50%",
    left: "50%",

    transform: "translate(-50%,-50%)",

    fontSize: "120px",
    fontWeight: "300",
  },
  subtitle: {
    position: "absolute",
    color: "white",
    top: "28%",
    left: "30%",
    letterSpacing: "0.3em",
    fontSize: "25px",
    fontWeight: "400",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.grow}>
            La Fontaine...
          </Link>
          <Link to="/news" className={classes.link}>
            News
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
