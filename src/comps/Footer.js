import { useState, useEffect } from "react";

import {
  Grid,
  Link,
  makeStyles,
  Typography,
  IconButton,
} from "@material-ui/core";
import { ToggleButtonGroup, ToggleButton } from "@material-ui/lab";
import {} from "@material-ui/core";
import {
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Email as EmailIcon,
} from "@material-ui/icons";

import { useTranslation } from "react-i18next";

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
      marginBottom: "3%",
      marginTop: "3%",
      fontWeight: "500",
    },
    text: {
      color: "#FF81A6",
      fontWeight: "400",
      fontSize: 15,
      textAlign: "center",
    },
    grid: {
      paddingTop: "3%",
      paddingBottom: "3%",
      paddingLeft: "10%",
      paddingRight: "10%",
    },
    items: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    icon: {
      color: "#FF81A6",
      fontSize: 25,
    },
    toggle: {
      color: "#FF81A6",
      border: "1px solid #FF81A6",
    },
  };
});
export default function Footer() {
  const classes = useStyle();
  const [lang, setLang] = useState("jp");
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <footer className={classes.footer}>
      <Grid container className={classes.grid} justify="center">
        <Grid
          item
          md={4}
          container
          className={classes.items}
          direction="column"
          xs={12}
          sm={6}
        >
          <p className={classes.title}>La Fontaine...</p>
          <Typography variant="subtitle2" className={classes.text}>
            {t("footer.greeting1")}
          </Typography>
          <Typography variant="subtitle2" className={classes.text} gutterBottom>
            {t("footer.greeting2")}
          </Typography>
          <Link href="/login" className={classes.text}>
            {t("footer.login")}
          </Link>

          <ToggleButtonGroup
            value={lang}
            exclusive
            onChange={() => setLang(lang === "en" ? "jp" : "en")}
            aria-label="text alignment"
            style={{ marginTop: "5%" }}
          >
            <ToggleButton
              value="left"
              aria-label="left aligned"
              className={classes.toggle}
            >
              Japanese
            </ToggleButton>
            <ToggleButton
              value="left"
              aria-label="left aligned"
              className={classes.toggle}
            >
              English
            </ToggleButton>
          </ToggleButtonGroup>
        </Grid>
        <Grid
          item
          container
          className={classes.items}
          direction="column"
          xs={12}
          sm={6}
          md={4}
        >
          <Typography variant="subtitle1" className={classes.text}>
            {t("footer.sns")}
          </Typography>
          <IconButton
            href="https://www.instagram.com/lafontaine.chorus/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon className={classes.icon} />
            <Typography variant="body2" className={classes.text}>
              Instagram
            </Typography>
          </IconButton>
          <IconButton
            href="https://www.facebook.com/profile.php?id=100023634976751"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon className={classes.icon} />
            <Typography variant="body2" className={classes.text}>
              Facebook
            </Typography>
          </IconButton>
          <IconButton
            href="mailto:lafontaine.chorussong@gmail.com"
            target="_top"
          >
            <EmailIcon className={classes.icon} />
            <Typography variant="body2" className={classes.text}>
              mail
            </Typography>
          </IconButton>
        </Grid>
      </Grid>
    </footer>
  );
}
