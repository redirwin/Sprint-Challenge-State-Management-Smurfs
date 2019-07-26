import React from "react";

// styles
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
// import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default props => {
  const classes = useStyles();
  return (
    <Grid item xs={6}>
      <Card className={classes.card}>
        <CardContent>
          <Typography variant="h5" component="h2">
            {props.smurf.name} Smurf
          </Typography>
          <Typography variant="body2" component="p">
            Age: {props.smurf.age}
            <br />
            Height: {props.smurf.height}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
