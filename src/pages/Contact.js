import { Paper, makeStyles, Grid, TextField, Button } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return {
    topPaper: {
      backgroundImage: `url("/topImage.jpg")`,
      backgroundSize: "100% auto",
      backgroundRepeat: "no-repeat",
      width: "100vw",
      height: "75vh",
      display: "block",
      position: "relative",
    },
    topTitle: {
      fontFamily: "Dancing Script",
      position: "absolute",
      color: "white",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      margin: 0,
      padding: 0,
      fontSize: "120px",
      fontWeight: "300",
    },
    grid: {
      paddingTop: "8%",
      paddingLeft: "30%",
      paddingRight: "30%",
      paddingBottom: "8%",
    },

    paragraph: {
      maxWidth: "100vw",
      overflowWrap: "break-word",
      textAlign: "left",
      fontSize: "18px",
      fontWeight: "300",
      marginBottom: "10%",
      lineHeight: "1.5em",
    },
    flex: {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
    submitBtn: {
      color: "white",
      background: "#FF7193",
      margin: "5%",
    },
  };
});

const Contact = () => {
  const classes = useStyle();
  const topTitle = "Contact";
  return (
    <div className="contact">
      <Paper className={classes.topPaper}>
        <h1 className={classes.topTitle}>{topTitle}</h1>
      </Paper>
      <Grid container direction="column" className={classes.grid}>
        <Grid item>
          <h3>お問い合わせ</h3>
        </Grid>
        <Grid item>
          <p className={classes.paragraph}>
            ご質問等ございましたら、こちらにお願いします。
            <br />
            <br />
            また、La Fontaineは新規団員を募集中です。
            もし興味を持っていただけた方がいらっしゃいましたら、お気軽にお問い合わせください。
            <br />
            私たちと同じような想いで、「合唱がしたい！」と思ってくださる方の入団を、心よりお待ちしております♪
          </p>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item sm={12} md={6}>
            <TextField
              required
              className={classes.flex}
              id="name-required"
              fullWidth
              label="name"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={12} md={6}>
            <TextField
              required
              className={classes.flex}
              id="email-required"
              fullWidth
              label="email"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            required
            className={classes.flex}
            id="text-required"
            label="text"
            variant="outlined"
            fullWidth
            multiline
            rows={10}
          />
        </Grid>
        <Grid item container justify="center">
          <Button
            variant="contained"
            size="medium"
            className={classes.submitBtn}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
