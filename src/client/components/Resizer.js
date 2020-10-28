import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Grid, Paper, Fab, Box, CardMedia } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import blueGrey from "@material-ui/core/colors/blueGrey";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    backgroundColor: blueGrey[100],
  },
  uploadPaper: {
    display: "block",
    padding: theme.spacing(4),
    textAlign: "center",
    transition: "background-color 0.5s ease",
    "&:hover": {
      backgroundColor: blueGrey[50],
    },
  },
  downloadButton: {
    float: "right",
  },
  media: {
    height: 100,
    width: 100,
    display: "inline-block",
  },
}));

export default function Resizer({ resizeRequest, img }) {
  const classes = useStyles();

  const handleClick = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    resizeRequest(formData);
  };

  return (
    <Container maxWidth="md">
      <Paper className={classes.paper}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <Typography variant="h4">Resizer</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              Browse for an image on your computer below
            </Typography>
          </Grid>
          <Grid item>
            <Paper className={classes.uploadPaper} component="label">
              <input
                style={{ display: "none" }}
                name="image"
                type="file"
                onInput={handleClick}
                accept="image/*"
              />
              {img ? (
                <CardMedia className={classes.media} image={`/images/${img}`} />
              ) : (
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Avatar>
                    <CloudUploadIcon />
                  </Avatar>
                  <Typography variant="h6" color="textSecondary">
                    Select Image
                  </Typography>
                </Box>
              )}
            </Paper>
          </Grid>
          <Grid item>
            {img && (
              <Fab
                variant="extended"
                color="primary"
                aria-label="add"
                name="download"
                href={`/images/${img}`}
                download="ResizedImage_100x100.png"
                className={classes.downloadButton}
              >
                Download
              </Fab>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
