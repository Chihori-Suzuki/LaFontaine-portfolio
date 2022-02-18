import { Box, Button, makeStyles } from "@material-ui/core";
import { useState } from "react";
import { Alert } from "@material-ui/lab";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyle = makeStyles((theme) => {
  return {
    container: {
      display: "flex",
      flexDirection: "column",
    },
    backBtn: {
      background: "#AFAFAF",
      color: theme.palette.font.secondary,
    },
    logoutBtn: {
      width: "100%",
      color: theme.palette.font.black,
      "&:hover": {
        backgroundColor: "#AFAFAF",
      },
      marginBottom: 10,
    },
    link: {
      textDecoration: "none",
      color: theme.palette.font.secondary,
    },
  };
});
const Logout = ({ style }) => {
  const classes = useStyle();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();
  const handleLogout = async () => {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  };

  return (
    <Box id="logout" className={classes.container} style={style}>
      {error && <Alert severity="error">{error}</Alert>}
      {currentUser ? (
        <>
          <Button
            variant="link"
            onClick={handleLogout}
            className={classes.logoutBtn}
          >
            Log out
          </Button>
          <Button className={classes.backBtn}>
            <ArrowBackIosIcon />
            <Link
              to={{
                pathname: "/login",
              }}
              className={classes.link}
            >
              Back
            </Link>
          </Button>
        </>
      ) : null}
    </Box>
  );
};

export default Logout;
