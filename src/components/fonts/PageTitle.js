import { Paper, makeStyles, Typography } from "@material-ui/core";

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
      fontFamily: "Dancing Script",
      position: "absolute",
      color: theme.palette.font.secondary,
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      margin: 0,
      padding: 0,

      [theme.breakpoints.down("sm")]: {
        fontSize: "60px",
        fontWeight: "500",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "70px",
        fontWeight: "600",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "100px",
        fontWeight: "700",
      },
    },
  };
});

const PageTitle = ({ title, image }) => {
  const classes = useStyle();
  return (
    <Paper className={classes.topPaper} elevation={0}>
      <img className={classes.image} src={image} alt="pageTopImage"></img>
      <Typography variant="h3" className={classes.topTitle}>
        {title}
      </Typography>
    </Paper>
  );
};

export default PageTitle;
