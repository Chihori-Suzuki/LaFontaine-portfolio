import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return {
    title: {
      fontFamily: "Dancing Script",
      fontWeight: "500",
      color: theme.palette.font.black,
    },
  };
});

const TitleText = ({ text, variant, style }) => {
  const classes = useStyle();
  return (
    <Typography
      variant={variant}
      style={style}
      className={classes.TitleText}
      align="center"
      className={classes.title}
    >
      {text}
    </Typography>
  );
};

export default TitleText;
