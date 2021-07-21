import { Grid, makeStyles } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";

const useStyle = makeStyles((theme) => {
  return {
    footer: {
      backgroundColor: "#FFCFDB",
      width: "100%",
    },
    title: {
      fontFamily: "Ruthie",
      fontSize: "45px",
      color: "#FF81A6",
      marginBottom: 0,
      marginTop: "10%",
      fontWeight: "500",
    },
    text: {
      color: "#FF81A6",
      fontWeight: "400",
      fontSize: 15,
      margin: 0,
    },
    grid: {
      paddingTop: "3%",
      paddingBottom: "3%",
      paddingLeft: "20%",
      paddingRight: "20%",
    },
    items: {
      display: "flex",
      justifyContent: "center",
      marginLeft: 0,
      // alignItems: "center",
    },
    icon: {
      color: "#FF81A6",
      fontSize: 25,
      // marginLeft: "10px",
      // marginRight: "10px",
    },
  };
});
export default function Footer() {
  const classes = useStyle();
  return (
    <footer className={classes.footer}>
      <Grid container className={classes.grid} justify="center">
        <Grid item md={4} container className={classes.items}>
          <Grid item>
            <p className={classes.title}>La Fontaine...</p>
          </Grid>
          <Grid item>
            <p className={classes.text}>
              栃木を中心に活動する合唱団です♪
              <br />
              興味がある方はフォローしてね♪
            </p>
          </Grid>
        </Grid>
        <Grid item md={4} container className={classes.items}>
          {/* <Grid item>
            <p className={classes.text}>Follow us on the web</p>
          </Grid> */}
          <Grid item container direction="column">
            <IconButton
              href="https://www.instagram.com/lafontaine.chorus/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className={classes.icon} />
              <p className={classes.text}>Instagram</p>
            </IconButton>
            <IconButton
              href="https://www.facebook.com/profile.php?id=100023634976751"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon className={classes.icon} />
              <p className={classes.text}>Facebook</p>
            </IconButton>
            <IconButton
              href="mailto:lafontaine.chorussong@gmail.com"
              target="_top"
            >
              <EmailIcon className={classes.icon} />
              <p className={classes.text}>mail</p>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
}
