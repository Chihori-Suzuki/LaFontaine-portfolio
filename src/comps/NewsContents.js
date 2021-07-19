import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import firebase from "../service/firebase";
import { storage } from "../service/firebase";

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
    linkBtn: {
      background: "#FF7193",
      color: "white",
    },
  };
});
const NewsContents = () => {
  const classes = useStyle();

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");

  const ref = firebase.firestore().collection("news");

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
                <Grid item>
                  <Button className={classes.linkBtn}>Link</Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ))}
    </div>
  );
};

export default NewsContents;
