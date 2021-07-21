import { Box, Grid, makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles(() => {
  return {
    topPaper: {
      backgroundImage: `url("/topImage.jpg")`,
      backgroundSize: "auto 100%",
      width: "100vw",
      height: "75vh",
      display: "block",
      position: "relative",
      // verticalAlign: "bottom",
    },
    topContainer: {
      textAlign: "center",
    },
    topTitle: {
      fontFamily: "Ruthie",
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
    subtitle: {
      position: "absolute",
      color: "white",
      letterSpacing: "0.25em",
      fontSize: "25px",
      fontWeight: "500",
      top: "60%",
      left: "50%",

      transform: "translate(-50%,-50%)",
    },

    title: {
      fontFamily: "Dancing Script",
      fontSize: "60px",
      fontWeight: "700",
      textAlign: "center",
    },
    paper: {
      background: "#FFF",
      paddingLeft: "20%",
      paddingRight: "20%",
      paddingTop: "5%",
      paddingBottom: "10%",
    },
    gridcon: {
      marginLeft: "10%",
      marginRight: "10%",
    },
    griditem: {
      display: "flex",
      flexDirection: "column",
    },
    box: {
      border: "solid",
      borderWidth: "thin",
      margin: "2rem",
      padding: "2rem 2rem",
    },
    box1: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
    },
    paraTitle: {
      fontSize: "32px",
      fontWeight: 400,
      letterSpacing: "0.2rem",
    },
    paragraph: {
      fontSize: "20px",
      fontWeight: 200,
      lineHeight: "2rem",
      textAlign: "left",
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
  const topTitle = "La Fontaine...";
  return (
    <div className="home">
      <Paper className={classes.topPaper}>
        <h1 className={classes.topTitle}>{topTitle}</h1>
        <h2 className={classes.subtitle}>
          Ladies singers in Utsunomiya & Tokyo
        </h2>
      </Paper>
      <Paper className={classes.paper}>
        <p className={classes.title}>Our music</p>
        <Grid container className={classes.youtube}>
          <iframe
            className={classes.iframe}
            src="https://www.youtube.com/embed/OZdu_vyPbCQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          {/* <Grid item sm={12} md={6}>
            <Box
              className={classes.box1}
              textAlign="center"
              justifyContent="center"
            >
              <h2 className={classes.paraTitle}>Title - subtitle</h2>
              <p className={classes.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                tempora sunt, inventore magnam et quam nihil cum, saepe fuga ut
                soluta? Earum, veniam incidunt! Atque vitae facere eius rerum
                molestias?
              </p>
            </Box>
          </Grid>

          <Grid item sm={12} md={6}>
            <Box
              className={classes.box}
              textAlign="center"
              justifyContent="center"
            >
              <img src="cd.jpg" width="50%" height="50%"></img>
              <audio controls>
                <source src="20180120_194059.wav" />
              </audio>
            </Box>
          </Grid> */}
        </Grid>
      </Paper>
    </div>
  );
};

export default Home;
