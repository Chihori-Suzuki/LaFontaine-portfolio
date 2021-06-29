import { Grid, makeStyles, TextField } from "@material-ui/core";

const useStyle = makeStyles(() => {});
const NewPost = () => {
  const classes = useStyle();
  return (
    <div>
      <Grid container direction="column" alignItems="center">
        <Grid item>
          <h2>Create Latest News</h2>
        </Grid>
        <Grid item>
          <h5>新しい記事を入力してねん</h5>
        </Grid>
        <Grid item>
          <TextField
            id="title"
            label="title"
            placeholder="演奏会のお知らせ"
            multiline
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default NewPost;
