import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return {
    logo: {
      fontFamily: "Ruthie",
      color: theme.palette.font.main,
    },
  };
});
const Logo = ({ variant, style }) => {
  const classes = useStyle();
  return (
    <Typography variant={variant} className={classes.logo} style={style}>
      La Fontaine...
    </Typography>
  );
};

export default Logo;
