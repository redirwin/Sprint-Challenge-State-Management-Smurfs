import { FETCH_SMURF_START } from "../actions/";

const initialState = {
  error: "",
  isFetching: false,
  smurfs: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURF_START:
      return state;
    default:
      return state;
  }
}

export default reducer;
