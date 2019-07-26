import { FETCH_SMURFS_START } from "../actions/";

const initialState = {
  error: "",
  isFetching: false,
  smurfs: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURFS_START:
      console.log("In reducer!");
      return state;
    default:
      return state;
  }
}

export default reducer;
