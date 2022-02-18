import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => {
  return {
    loading: {
      marginTop: 60,
      marginBottom: 300,
      fontFamily: "Roboto",
      color: theme.palette.font.black,
    },
  };
});

const Loading = () => {
  const classes = useStyles();
  return (
    <Typography variant="h4" align="center" className={classes.loading}>
      Loading...
    </Typography>
  );
};

export default Loading;
