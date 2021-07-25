import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import firebase from "../service/firebase";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const useStyle = makeStyles(() => {
  return {
    textGrid: {},
    image: {
      margin: "auto",
    },
    img: {
      float: "left",
      margin: "auto",
      display: "block",
    },
    paper: {
      display: "flex",
      padding: "5%",
      width: "100%",
      marginBottom: "5%",
    },
    item2: {
      overflowWrap: "break-word",
      overflow: "hidden",
      textAlign: "center",
    },
    btn: {
      background: "#FF7193",
      color: "white",
      margin: "3%",
    },
    link: {
      textDecoration: "none",
    },
  };
});
const NewsContents = () => {
  const classes = useStyle();

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const ref = firebase.firestore().collection("news");

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to log out");
    }
  }

  function getNews() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setNews(items);
      setLoading(false);
    });
  }
  useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  // delete the data from firestore database
  function deleteNews(delNews) {
    window.confirm("データを削除してもいいですか？");
    ref
      .doc(delNews.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div>
      {news.map((item) => (
        <div key={item.id}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" direction="column" spacing={2}>
              <Grid item className={classes.image}>
                <img
                  src={item.image}
                  className={classes.img}
                  height="auto"
                  width="100%"
                />
              </Grid>
              <Grid item className={classes.item2} container direction="column">
                <Grid item>
                  <h3>{item.title}</h3>
                  <p>{item.date}</p>
                </Grid>
                <Grid item>
                  <p>{item.detail}</p>
                </Grid>
                {currentUser ? (
                  <Grid item container direction="column" justify="center">
                    <Grid item>
                      <Link
                        to={{
                          pathname: "/post",
                          state: { isEdit: true, item },
                        }}
                        className={classes.link}
                      >
                        <Button className={classes.btn} h>
                          Edit
                        </Button>
                      </Link>
                      <Button
                        className={classes.btn}
                        onClick={() => deleteNews(item)}
                      >
                        Delete
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button variant="link" onClick={handleLogout}>
                        Log out
                      </Button>
                    </Grid>
                  </Grid>
                ) : null}
              </Grid>
            </Grid>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default NewsContents;
