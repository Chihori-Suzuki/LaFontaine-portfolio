import { Paper, makeStyles, Grid, Box } from "@material-ui/core";
import NewsContents from "../comps/NewsContents";

const useStyle = makeStyles((theme) => {
  return {
    topPaper: {
      backgroundImage: `url("/News.jpg")`,
      backgroundSize: "100% auto",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "75vh",
      display: "block",
      position: "relative",
    },
    topTitle: {
      fontFamily: "Dancing Script",
      position: "absolute",
      color: "white",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      margin: 0,
      padding: 0,
      fontSize: "120px",
      fontWeight: "300",
    },
    grid: {
      paddingTop: "5%",
      paddingBottom: "5%",
      paddingLeft: "30%",
      paddingRight: "30%",
    },
  };
});

const News = () => {
  const classes = useStyle();
  const topTitle = "News";
  return (
    <div className="news">
      <Paper className={classes.topPaper}>
        <h1 className={classes.topTitle}>{topTitle}</h1>
      </Paper>
      <Grid container className={classes.grid}>
        <Grid item>
          <Box>
            <NewsContents />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default News;
