import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import ContactContents from "../comps/ContactContents";

const useStyle = makeStyles((theme) => {
  return {
    grid: {
      display: "block",
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

export default function ContactList() {
  const classes = useStyle();

  return (
    <Grid container className={classes.grid}>
      <ContactContents />
    </Grid>
  );
}
