import { Grid, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return {
    grid: {
      textAlign: "center",
      paddingTop: "5%",
      paddingBottom: "5%",

      [theme.breakpoints.down("sm")]: {
        paddingLeft: "10%",
        paddingRight: "10%",
      },
      [theme.breakpoints.up("md")]: {
        paddingLeft: "20%",
        paddingRight: "20%",
      },
      [theme.breakpoints.up("lg")]: {
        paddingLeft: "25%",
        paddingRight: "25%",
      },
    },
  };
});

const GridContainer = ({ style, spacing, children }) => {
  const classes = useStyle();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.grid}
      style={style}
      spacing={spacing}
    >
      {children}
    </Grid>
  );
};

export default GridContainer;
