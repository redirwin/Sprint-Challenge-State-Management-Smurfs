import React from "react";
import { useDispatch } from "react-redux";
import AddSmurfForm from "./AddSmurfForm";

export default function AddSmurf() {
  const dispatch = useDispatch();

  return <AddSmurfForm dispatch={dispatch} />;
}
