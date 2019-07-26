import {
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAILURE,
  ADD_SMURF_START,
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAILURE
} from "../actions/";

const initialState = {
  error: "",
  isFetching: false,
  smurfs: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURFS_START:
      return {
        ...state,
        error: "",
        isFetching: true,
        smurfs: []
      };
    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        smurfs: action.payload
      };
    case FETCH_SMURFS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        smurfs: []
      };
    case ADD_SMURF_START:
      return {
        ...state,
        error: false,
        isFetching: false,
        smurfs: state.smurfs
      };
    case ADD_SMURF_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        smurfs: action.payload
      };
    case ADD_SMURF_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
        smurfs: state.smurfs
      };

    default:
      return state;
  }
}

export default reducer;
