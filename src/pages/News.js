import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import firebase from "../service/firebase";
import { useAuth } from "../contexts/AuthContext";
import Logout from "../components/Logout";
import { Link } from "react-router-dom";
import PageTitle from "../components/fonts/PageTitle";
import GridContainer from "../components/GridContainer";
import Loading from "../components/fonts/Loading";

const TOP_TITLE = "News";
const TOP_IMAGE = "/image/News.jpg";

const useStyle = makeStyles((theme) => {
  return {
    image: {
      float: "left",
      margin: "auto",
      display: "block",
    },
    paper: {
      display: "flex",
      padding: "5%",
      marginBottom: "5%",
      color: theme.palette.font.black,
    },
    item2: {
      overflowWrap: "break-word",
      overflow: "hidden",
      textAlign: "center",
    },
    updateBtn: {
      background: theme.palette.button.main,
      color: theme.palette.font.secondary,
      margin: "3%",
      textTransform: "none",
    },
    link: {
      textDecoration: "none",
    },
  };
});

const News = () => {
  const classes = useStyle();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { currentUser } = useAuth();

  const ref = firebase.firestore().collection("news");

  const getNews = () => {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      items.sort(function (a, b) {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      });
      setNews(items);
      setLoading(false);
    });
  };
  useEffect(() => {
    getNews();
  }, []);

  // delete the data from firestore database
  const deleteNews = (delNews) => {
    window.confirm("データを削除してもいいですか？");
    ref
      .doc(delNews.id)
      .delete()
      .catch((err) => {
        console.error(err);
      });
  };

  if (loading) return <Loading />;

  return (
    <div className="news">
      <PageTitle title={TOP_TITLE} image={TOP_IMAGE} />
      <GridContainer>
        {news.map((item) => (
          <div key={item.id}>
            <Paper className={classes.paper}>
              <Grid container wrap="nowrap" direction="column" spacing={2}>
                <Grid item>
                  <img
                    src={item.image}
                    className={classes.image}
                    height="auto"
                    width="100%"
                    alt="newsContentImage"
                  />
                </Grid>
                <Grid
                  item
                  className={classes.item2}
                  container
                  direction="column"
                  spacing={3}
                >
                  <Grid item>
                    <Typography
                      variant="h6"
                      style={{ marginTop: 10, marginBottom: 5 }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="body1">{item.date}</Typography>
                  </Grid>
                  <Grid item>
                    <div style={{ whiteSpace: "pre-line" }}>
                      <Typography variant="body2">{item.detail}</Typography>
                    </div>
                  </Grid>
                  {currentUser ? (
                    <Grid item container direction="column" justifyContent="center">
                      <Grid item>
                        <Link
                          to={{
                            pathname: "/post",
                            state: { isEdit: true, item },
                          }}
                          className={classes.link}
                        >
                          <Button className={classes.updateBtn}>Edit</Button>
                        </Link>
                        <Button
                          className={classes.updateBtn}
                          onClick={() => deleteNews(item)}
                        >
                          Delete
                        </Button>
                      </Grid>
                    </Grid>
                  ) : null}
                </Grid>
              </Grid>
            </Paper>
          </div>
        ))}

        <Logout style={{ marginTop: 10 }} />
      </GridContainer>
    </div>
  );
};

export default News;
