import { Grid } from "@material-ui/core";
import Toolbar from "./Toolbar";
import Resizer from "../containers/Resizer";
import React from "react";

export default function Main() {
  return (
    <Grid container direction="column" spacing={4}>
      <Grid item>
        <Toolbar />
      </Grid>
      <Grid item>
        <Resizer />
      </Grid>
    </Grid>
  );
}
