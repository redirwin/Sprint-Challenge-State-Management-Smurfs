import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSmurfs } from "../store/actions";

export default function DisplaySmurfs() {
  const smurfs = useSelector(state => state.smurfs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSmurfs());
  }, [dispatch]);

  if (!smurfs) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {smurfs.map(smurf => {
        return <div>{smurf.name}</div>;
      })}
    </div>
  );

  return <div>Hello</div>;
}
