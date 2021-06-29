import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import { signInWithGoogle } from "../service/firebase";

const useStyle = makeStyles(() => {});
const Login = () => {
  const classes = useStyle();
  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <h2>Create Latest News</h2>
        </Grid>
        <Grid item>
          <h5>Login</h5>
        </Grid>
        <Grid item>
          <TextField id="email" label="email" multiline variant="outlined" />
        </Grid>
        <Grid item>
          <TextField
            id="password"
            label="password"
            multiline
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <Button>Login</Button>
        </Grid>
        <Grid item>
          <Button onClick={signInWithGoogle}>Login with Google</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
