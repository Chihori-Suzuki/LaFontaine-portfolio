import { Grid, makeStyles, Paper } from "@material-ui/core";

const useStyle = makeStyles(() => {
  return {
    footer: {
      backgroundColor: "#FFDFEE",
      width: "100%",
    },
    title: {
      fontFamily: "Ruthie",
      fontSize: "36px",
      color: "#FF81A6",
      marginBottom: 0,
      marginTop: "10%",
    },
    text: {
      color: "#FF81A6",
    },
    grid: {
      paddingLeft: "30%",
      paddingRight: "30%",
    },
    items: {
      display: "flex",
      justifyContent: "center",
      // alignItems: "center",
    },
  };
});
const Footer = () => {
  const classes = useStyle();
  return (
    <footer className={classes.footer}>
      <Grid container className={classes.grid}>
        <Grid item md={4} container className={classes.items}>
          <p className={classes.title}>La Fontaine...</p>
          <p className={classes.text}>mail: LaFontaine@gmail.com</p>
        </Grid>
        <Grid item md={4} container className={classes.items}>
          <p className={classes.text}>
            Page - Top
            <br />
            News
            <br />
            About
            <br />
            Contact
          </p>
        </Grid>
        <Grid item md={4} container className={classes.items}>
          <p className={classes.text}>Follow us on the web</p>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
