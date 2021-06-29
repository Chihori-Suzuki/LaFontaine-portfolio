import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyle = makeStyles(() => {
  return {
    textGrid: {},
    image: {
      margin: "auto",
    },
    img: {
      float: "left",
      margin: "auto",
      display: "block",
    },
    paper: {
      display: "flex",
      padding: "5%",
    },
    // items: {
    //   display: "flex",
    // },
    item2: {
      overflowWrap: "break-word",
      overflow: "hidden",
    },
  };
});
const NewsContents = () => {
  const classes = useStyle();
  return (
    <Paper className={classes.paper}>
      {/* // check it out */}
      <Grid container wrap="nowrap" direction="row" spacing={2}>
        <Grid item className={classes.image}>
          <img src="cd.jpg" className={classes.img} height={100} width={100} />
        </Grid>
        <Grid item className={classes.item2} container direction="column">
          <Grid item>
            <h5>What is Lorem Ipsum?</h5>
          </Grid>
          <Grid item>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </Grid>
          <Grid item>
            <Button>Link</Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default NewsContents;
