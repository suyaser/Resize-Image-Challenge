import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Avatar } from "@material-ui/core";
import { deepOrange } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
}));

export default function Bar() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Image Resizer
        </Typography>
        <Avatar className={classes.orange}>Y</Avatar>
      </Toolbar>
    </AppBar>
  );
}
