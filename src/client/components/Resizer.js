import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Grid, Paper, Fab, Box } from "@material-ui/core";
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
}));

export default function SignIn() {
  const classes = useStyles();

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
                id="download-photo"
                name="download-photo"
                type="file"
              />
              <Box display="flex" alignItems="center" flexDirection="column">
                <Avatar>
                  <CloudUploadIcon />
                </Avatar>
                <Typography variant="h6" color="textSecondary">
                  Click to upload
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Fab
              disabled
              variant="extended"
              color="primary"
              aria-label="add"
              className={classes.downloadButton}
            >
              Download
            </Fab>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}
