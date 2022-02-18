import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import firebase from "../service/firebase";
import Logout from "../components/Logout";
import GridContainer from "../components/GridContainer";
import TitleText from "../components/fonts/TitleText";

const useStyle = makeStyles((theme) => {
  return {
    item: {
      width: "100%",
    },
    paper: {
      textAlign: "left",
      padding: "5%",
      marginTop: "2%",
      marginBottom: "5%",
    },
  };
});

const ContactList = () => {
  const classes = useStyle();

  const [contact, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);

  const ref = firebase.firestore().collection("contacts");

  const getContacts = () => {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });

      items.sort(function (a, b) {
        if (a.date < b.date) {
          return 1;
        }
        if (a.date > b.date) {
          return -1;
        }
        return 0;
      });
      setContacts(items);
      setLoading(false);
    });
  };
  useEffect(() => {
    getContacts();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <GridContainer>
      <TitleText
        text="Contact List"
        variant="h3"
        style={{ marginTop: 30, marginBottom: 30 }}
      />
      {contact.map((item) => (
        <div key={item.id} className={classes.item}>
          <Paper className={classes.paper}>
            <Grid container wrap="nowrap" direction="column" spacing={2}>
              <Grid item>
                <Typography variant="h6">Name:</Typography>
                <Typography variant="body1" gutterBottom>
                  {item.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Email:</Typography>
                <Typography variant="body1" gutterBottom>
                  {item.email}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Message:</Typography>
                <Typography variant="body1" gutterBottom>
                  {item.message}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">Date:</Typography>
                <Typography variant="body1" gutterBottom>
                  {item.date}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </div>
      ))}
      <Logout />
    </GridContainer>
  );
};
export default ContactList;
