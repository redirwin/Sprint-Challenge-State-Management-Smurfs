import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddSmurfForm from "./AddSmurfForm";

export default function AddSmurf() {
  const smurfs = useSelector(state => state.smurfs);
  const dispatch = useDispatch();

  //   addPrep = (e, smurf) => {
  //     console.log("in addPrep");

  //     // dispatch(addSmurf(e))
  //   };

  return <AddSmurfForm dispatch={dispatch} />;
}
