import { Grid, makeStyles, Typography } from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import { useTranslation } from "react-i18next";
import Logo from "../components/fonts/Logo.js";
import GridContainer from "../components/GridContainer.js";
import PageTitle from "../components/PageTitle";

const TOP_TITLE = "About us";
const TOP_IMAGE = "/image/about.jpg";

const useStyle = makeStyles((theme) => {
  return {
    items: {
      listStyle: "none",
      minWidth: "100%",
      position: "relative",
      marginBottom: "10%",
    },
    icon: {
      float: "left",
      color: theme.palette.font.main,
      position: "relative",
      overflow: "hidden",
      marginLeft: "20px",
      padding: 0,
    },
    timelineContent: {
      float: "left",
      borderLeft: "3px #FF81A6 solid",
      marginLeft: "30px",
      paddingLeft: "30px",
      paddingBottom: "10%",
      position: "absolute",
    },
    paragraph: {
      color: theme.palette.font.black,
      maxWidth: "100vw",
      overflowWrap: "break-word",
      textAlign: "left",
      fontWeight: "300",
      marginBottom: "10%",
      whiteSpace: "pre-wrap",
    },
    paragraph2: {
      color: theme.palette.font.black,
      maxWidth: "100vw",
      overflowWrap: "break-word",
      textAlign: "left",
      fontWeight: "300",
      margin: 0,
      whiteSpace: "pre-wrap",
    },
    image2: {
      marginTop: "15%",
    },
  };
});
const About = () => {
  const classes = useStyle();
  const { t } = useTranslation();
  return (
    <div className="about">
      <PageTitle title={TOP_TITLE} image={TOP_IMAGE} />
      <GridContainer>
        <Grid item>
          <Logo variant="h3" style={{ marginBottom: 30 }} />
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.paragraph}>
            {t("about.intro")}
          </Typography>
        </Grid>

        <li className={classes.items}>
          <Brightness1Icon className={classes.icon} />
          <div className={classes.timelineContent}>
            <Typography variant="body1" className={classes.paragraph2}>
              {t("about.history1")}
            </Typography>
          </div>
        </li>
        <li className={classes.items}>
          <Brightness1Icon className={classes.icon} />
          <div className={classes.timelineContent}>
            <Typography variant="body1" className={classes.paragraph2}>
              {t("about.history2")}
            </Typography>
          </div>
        </li>
        <li className={classes.items}>
          <Brightness1Icon className={classes.icon} />
          <div className={classes.timelineContent}>
            <Typography variant="body1" className={classes.paragraph2}>
              {t("about.history3")}
            </Typography>
          </div>
        </li>
        <li className={classes.items}>
          <Brightness1Icon className={classes.icon} />
          <div className={classes.timelineContent}>
            <Typography variant="body1" className={classes.paragraph2}>
              {t("about.history4")}
              <br />
            </Typography>
          </div>
        </li>
        <img
          className={classes.image2}
          src="/image/aboutbelow.jpg"
          width="100%"
          height="auto"
          alt="aboutBelowImage"
        />
      </GridContainer>
    </div>
  );
};

export default About;
