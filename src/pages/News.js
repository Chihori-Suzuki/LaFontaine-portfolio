import { Paper, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return {
    topPaper: {
      backgroundImage: `url("/News.jpg")`,
      backgroundSize: "auto 100%",
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
  };
});

const News = () => {
  const classes = useStyle();
  const topTitle = "News";
  return (
    <div className="contact">
      <Paper className={classes.topPaper}>
        <h1 className={classes.topTitle}>{topTitle}</h1>
      </Paper>
    </div>
  );
};

export default News;
