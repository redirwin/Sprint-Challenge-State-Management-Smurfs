import React from "react";

// styling
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  button: {
    position: "fixed",
    right: "50px",
    top: "15px"
  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Smurf Village
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Add Smurf
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
