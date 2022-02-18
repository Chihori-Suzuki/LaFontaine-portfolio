import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import Logout from "../components/Logout";
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
    label: {
      textAlign: "left",
      display: "block",
    },
    form: {
      flexDirection: "column",
    },
    input: {
      border: "1px solid #ddd",
      display: "block",
    },
    loginbtn: {
      background: "#FF7193",
      color: theme.palette.font.secondary,
    },
  };
});
const Signup = () => {
  const classes = useStyle();
  const emailRef = useRef();
  const passRef = useRef();
  const passComfRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passRef.current.value !== passComfRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passRef.current.value);
      history.push("/post");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          className={classes.grid}
          direction="column"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <TitleText text="Sign up" variant="h3" />
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
          <Grid item container>
            <TextField
              id="password-confirm"
              type="password"
              label="password confirm"
              fullWidth
              variant="outlined"
              required
              inputRef={passComfRef}
            />
          </Grid>
          <Grid item>
            <Button
              disabled={loading}
              variant="contained"
              type="submit"
              className={classes.loginbtn}
            >
              Sign up
            </Button>
          </Grid>
          <Logout style={{ marginTop: 30, marginBottom: 30 }} />
        </Grid>
      </form>
    </div>
  );
};

export default Signup;
