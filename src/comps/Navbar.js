import {
  AppBar,
  makeStyles,
  Toolbar,
  Menu,
  MenuItem,
  Button,
  useMediaQuery,
} from "@material-ui/core";
import { useState } from "react";

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

    [theme.breakpoints.down("sm")]: {
      fontSize: "35px",
      fontWeight: "500",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "48px",
    },
  },
  link: {
    color: "#FF81A6",
    marginRight: theme.spacing(5),
    fontFamily: "montserrat",
    fontWeight: "thin",
    letterSpacing: "0.1rem",
    textDecoration: "none",

    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
      fontWeight: "500",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 24,
    },
  },
  appbar: {
    background: "#FFFFFF",
    position: "fixed",
  },
  toolbar: {
    [theme.breakpoints.down("sm")]: {
      minHeight: 70,
    },
    [theme.breakpoints.up("md")]: {
      minHeight: 90,
    },
    [theme.breakpoints.up("lg")]: {
      minHeight: 110,
    },
  },
  languageBtn: {
    color: "white",
    fontSize: "16px",
    background: "#FF81A6",
    border: "none",
    borderRadius: "4px",
  },
  menuButton: {
    color: "#FF7193",
    fontSize: "16px",
    padding: 10,
    textTransform: "none",
  },
}));

const ResponsiveMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  const small = useMediaQuery("(max-width:680px)");

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {small ? (
        <>
          <Button
            className={classes.menuButton}
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            Menu
          </Button>
          <Menu
            elevation={1}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/news" className={classes.link}>
                News
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/about" className={classes.link}>
                About
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/contact" className={classes.link}>
                Contact
              </Link>
            </MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <Link to="/news" className={classes.link}>
            News
          </Link>
          <Link to="/about" className={classes.link}>
            About
          </Link>
          <Link to="/contact" className={classes.link}>
            Contact
          </Link>
        </>
      )}
    </>
  );
};

const Navbar = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Link to="/" className={classes.grow}>
            La Fontaine...
          </Link>
          <ResponsiveMenu />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
