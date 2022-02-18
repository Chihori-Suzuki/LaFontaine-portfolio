import { Grid, makeStyles, Paper } from "@material-ui/core";
import TitleText from "../components/fonts/TitleText";

const TOP_TITLE = "La Fontaine...";
const useStyle = makeStyles((theme) => {
  return {
    topPaper: {
      display: "block",
      position: "relative",
    },
    image: {
      width: "100%",
      height: "100%",
    },
    topTitle: {
      fontFamily: "Ruthie",
      position: "absolute",
      color: theme.palette.font.secondary,
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      margin: 0,
      padding: 0,
      [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "70px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "90px",
        fontWeight: "300",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "120px",
        fontWeight: "300",
      },
    },
    subtitle: {
      position: "absolute",
      color: theme.palette.font.secondary,
      textAlign: "center",
      left: "50%",
      fontWeight: "300",
      [theme.breakpoints.down("sm")]: {
        letterSpacing: ".15em",
        top: "60%",
        fontSize: "12px",
      },
      [theme.breakpoints.up("sm")]: {
        letterSpacing: ".15em",
        top: "65%",
        fontSize: "18px",
      },
      [theme.breakpoints.up("md")]: {
        letterSpacing: ".25em",
        top: "60%",
        fontSize: "23px",
      },
      transform: "translate(-50%,-50%)",
    },
    paper: {
      background: "#FFF",
      [theme.breakpoints.down("sm")]: {
        padding: "8% 10%",
      },
      [theme.breakpoints.up("sm")]: {
        padding: "8% 20%",
      },
    },
    youtube: {
      position: "relative",
      paddingBottom: "56.25%",
    },
    iframe: {
      position: "absolute",
      width: "100%",
      height: "100%",
      border: "none",
    },
  };
});
const Home = () => {
  const classes = useStyle();
  return (
    <div className="home">
      <Paper className={classes.topPaper} elevation={0}>
        <img
          className={classes.image}
          src="/image/topImage.jpg"
          // alt="topImage"
        ></img>
        <h1 className={classes.topTitle}>{TOP_TITLE}</h1>
        <h2 className={classes.subtitle}>
          Ladies singers in Utsunomiya & Tokyo
        </h2>
      </Paper>
      <Paper className={classes.paper}>
        <TitleText variant="h3" text="Our music" style={{ marginBottom: 30 }} />
        <Grid container className={classes.youtube}>
          <iframe
            className={classes.iframe}
            src="https://www.youtube.com/embed/OZdu_vyPbCQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
