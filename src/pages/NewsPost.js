import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";

const useStyle = makeStyles(() => {
  return {
    topTitle: {
      fontFamily: "Dancing Script",
      color: "#1C1B1B",
      marginTo: 0,
      //   marginBottom: "1%",
      padding: 0,
      fontSize: "80px",
      fontWeight: "300",
    },
    grid: {
      paddingTop: "5%",
      paddingBottom: "5%",
      paddingLeft: "30%",
      paddingRight: "30%",
    },
    TextField: {},
    submitbtn: {
      background: "#FF7193",
      color: "white",
    },
  };
});
const NewPost = () => {
  const classes = useStyle();
  const topTitle = "Create Latest News";
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <div>
      <Grid
        container
        className={classes.grid}
        direction="column"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <h1 className={classes.topTitle}>{topTitle}</h1>
        </Grid>
        <Grid item>{error && <Alert severity="error">{error}</Alert>}</Grid>
        <Grid item>
          <h3>新しい記事を入力してねん</h3>
        </Grid>
        <Grid item container>
          <TextField
            id="title"
            fullWidth
            label="title"
            multiline
            variant="outlined"
            className={classes.TextField}
          />
        </Grid>
        <Grid item container>
          <TextField
            id="text"
            className={classes.TextField}
            fullWidth
            label="text"
            multiline
            variant="outlined"
            multiline
            rows={6}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.submitbtn}>
            submit
          </Button>
        </Grid>
        <Grid item>
          <Button variant="link" onClick={handleLogout}>
            Log out
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default NewPost;
