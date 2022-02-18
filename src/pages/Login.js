import {
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import TitleText from "../components/fonts/TitleText";

const useStyle = makeStyles((theme) => {
  return {
    grid: {
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        padding: "5% 8%",
      },
      [theme.breakpoints.up("md")]: {
        padding: "5% 20%",
      },
    },
    loginbtn: {
      color: theme.palette.font.secondary,
      fontSize: "16px",
      background: "#FF7193",
      margin: "5%",
      paddingLeft: "3%",
      paddingRight: "3%",
      paddingTop: "2%",
      paddingBottom: "2%",
      border: "none",
      borderRadius: "4px",
      textTransform: "none",
    },
    menuItems: {
      "&:hover": {
        backgroundColor: theme.palette.background.main,
      },
    },
    link: {
      textDecoration: "none",
      fontSize: 24,
      color: "#FF7193",
    },
  };
});
const Login = () => {
  const classes = useStyle();
  const emailRef = useRef();
  const passRef = useRef();
  const { currentUser, login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passRef.current.value);
      // history.push("/post");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid
        container
        className={classes.grid}
        direction="column"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <TitleText variant="h2" text="Log in" style={{ mrginBottom: 30 }} />
        </Grid>
        <Grid item>{error && <Alert severity="error">{error}</Alert>}</Grid>
        <Grid item container>
          <TextField
            id="email"
            type="email"
            label="email"
            required
            fullWidth
            variant="outlined"
            inputRef={emailRef}
          />
        </Grid>
        <Grid item container>
          <TextField
            id="password"
            type="password"
            label="password"
            fullWidth
            variant="outlined"
            required
            inputRef={passRef}
          />
        </Grid>
        <Grid item container justifyContent="center">
          <Button
            id="login-btn"
            className={classes.loginbtn}
            disabled={loading}
            type="submit"
          >
            Login
          </Button>
        </Grid>

        {currentUser ? (
          <Grid item id="menu" container justify="center" spacing={2}>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                ☆ 会員専用メニュー ☆
              </Typography>
            </Grid>
            <Grid item container direction="row" justify="center" spacing={3}>
              <Grid item xs={12} sm={4} md={3} className={classes.menuItems}>
                <Link to="/signup" className={classes.link}>
                  Sign Up
                </Link>
              </Grid>
              <Grid item xs={12} sm={4} md={3} className={classes.menuItems}>
                <Link to="/contactlist" className={classes.link}>
                  Contact List
                </Link>
              </Grid>
              <Grid item xs={12} sm={4} md={3} className={classes.menuItems}>
                <Link to="/news" className={classes.link}>
                  News Edit
                </Link>
              </Grid>
              <Grid item xs={12} sm={4} md={3} className={classes.menuItems}>
                <Link
                  to={{
                    pathname: "/post",
                    state: { isEdit: false },
                  }}
                  className={classes.link}
                >
                  News Post
                </Link>
              </Grid>
            </Grid>
          </Grid>
        ) : null}
      </Grid>
    </form>
  );
};

export default Login;
