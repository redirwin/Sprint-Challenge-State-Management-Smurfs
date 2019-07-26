import axios from "axios";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";

export const getSmurfs = () => dispatch => {
  console.log("In action!");
  dispatch({ type: FETCH_SMURFS_START });
};
