import {
  makeStyles,
  Grid,
  TextField,
  Typography,
  Button,
} from "@material-ui/core";
import { useState } from "react";
import { db } from "../service/firebase";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import PageTitle from "../components/fonts/PageTitle";
import GridContainer from "../components/GridContainer";

const TOP_TITLE = "Contact";
const TOP_IMAGE = "/image/topImage.jpg";

const { DateTime } = require("luxon");

const useStyle = makeStyles((theme) => {
  return {
    title: { marginBottom: 20, color: theme.palette.font.black },
    paragraph: {
      maxWidth: "100vw",
      overflowWrap: "break-word",
      textAlign: "center",
      fontWeight: "300",
      marginBottom: "10%",
      lineHeight: "1.5em",
      whiteSpace: "pre-wrap",
      color: theme.palette.font.black,
    },
    flex: {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
    submitBtn: {
      color: theme.palette.font.secondary,
      fontSize: "16px",
      background: "#FF7193",
      margin: "5%",
      paddingLeft: "3%",
      paddingRight: "3%",
      paddingTop: "2%",
      paddingBottom: "2%",
      border: "none",
      borderRadius: "4px",
    },
  };
});

const Contact = () => {
  const classes = useStyle();
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);
  const date = DateTime.now().setLocale("zh").toLocaleString(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        id: uuidv4(),
        name: name,
        email: email,
        message: message,
        date: date,
      })
      .then(() => {
        alert("メッセージを受け付けました🥰");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <PageTitle title={TOP_TITLE} image={TOP_IMAGE} />
      <form onSubmit={handleSubmit}>
        <GridContainer>
          <Grid item>
            <Typography variant="h5" className={classes.title}>
              {t("contact.title")}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" className={classes.paragraph}>
              {t("contact.body")}
            </Typography>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item container sm={12} md={6}>
              <TextField
                required
                className={classes.flex}
                id="name-required"
                fullWidth
                label="name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item container sm={12} md={6}>
              <TextField
                required
                className={classes.flex}
                type="email"
                id="email-required"
                fullWidth
                label="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container>
            <TextField
              required
              className={classes.flex}
              id="text-required"
              label="message"
              variant="outlined"
              fullWidth
              multiline
              rows={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Grid>
          <Grid item container justify="center">
            <Button
              variant="contained"
              type="submit"
              size="medium"
              className={classes.submitBtn}
              style={{
                background: loader ? "#ccc" : "#FF7193",
                textTransform: "none",
              }}
            >
              Submit
            </Button>
          </Grid>
        </GridContainer>
      </form>
    </div>
  );
};

export default Contact;
