import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE
} from "../actions/";

const initialState = {
  error: "",
  isFetching: false,
  smurfs: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURFS_START:
      //   console.log("In FETCH_START!");
      return {
        ...state,
        error: "",
        isFetching: true,
        smurfs: []
      };
    case FETCH_SMURFS_SUCCESS:
      //   console.log("In FETCH_SUCCESS!");
      return {
        ...state,
        error: "",
        isFetching: false,
        smurfs: action.payload
      };
    case FETCH_SMURFS_FAILURE:
      //   console.log("In FETCH_FAILURE!");
      return {
        ...state,
        error: true,
        isFetching: false,
        smurfs: []
      };
    default:
      return state;
  }
}

export default reducer;
