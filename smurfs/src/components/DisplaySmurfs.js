import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSmurfs } from "../store/actions";

// styles
import Grid from "@material-ui/core/Grid";

// app components
import AddSmurf from "./AddSmurf";
import SmurfCard from "./SmurfCard";

export default function DisplaySmurfs() {
  const smurfs = useSelector(state => state.smurfs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSmurfs());
  }, [dispatch]);

  if (!smurfs) {
    return (
      <>
        <p>
          Smurf Village is empty! <br />
          Add a smurf!
        </p>
        <AddSmurf />
      </>
    );
  }

  return (
    <div>
      <AddSmurf />
      <Grid container spacing={3}>
        {smurfs.map(smurf => {
          return <SmurfCard smurf={smurf} key={smurf.id} />;
        })}
      </Grid>
    </div>
  );
}
