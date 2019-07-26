import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSmurfs } from "../store/actions";

import SmurfCard from "./SmurfCard";

export default function DisplaySmurfs() {
  const smurfs = useSelector(state => state.smurfs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSmurfs());
  }, [dispatch]);

  if (!smurfs) {
    return (
      <p>
        Smurf Village is empty! <br />
        Add a smurf!
      </p>
    );
  }

  return (
    <div>
      {smurfs.map(smurf => {
        return <SmurfCard smurf={smurf} key={smurf.id} />;
      })}
    </div>
  );
}
