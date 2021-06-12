import { AppBar, makeStyles, Paper, Toolbar, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    color: "#FF6AC4",
    textAlign: "left",
    fontFamily: "Ruthie",
    fontSize: "48px",
    fontWeight: "300",
    textDecoration: "none",
  },
  link: {
    color: "#FF6AC4",
    marginRight: theme.spacing(4),
    fontSize: "24px",
    textDecoration: "none",
  },
  appbar: {
    background: "#FFFFFF",
  },
  toolbar: {
    minHeight: 128,
  },
  image: {
    backgroundSize: "auto 100%",
    width: "100vw",
    opacity: 0.6,
  },
  paper: {
    position: "relative",
    display: "fixed",
    background: "rgba(243, 1, 227, 0.50)",
  },
  title: {
    fontFamily: "Ruthie",
    position: "absolute",
    color: "white",
    top: "35%",
    left: "40%",

    fontSize: "100px",
    fontWeight: "300",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const title = "La Fontaine...";
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
          <Link to="/concert" className={classes.link}>
            Concerts
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
        </Toolbar>
      </AppBar>
      <Paper className={classes.paper}>
        <img className={classes.image} src="top.jpg" />
        <h1 className={classes.title}>{title}</h1>
      </Paper>
    </div>
  );
};

export default Navbar;
