import {
  STATE_INFO_STARTED,
  STATE_INFO_SUCCESS,
  STATE_INFO_FAILED,
} from "../actions/types";

const initialState = {
  isLoading: false,
  error: { isError: false, message: "" },
  data: {},
};

function stateReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case STATE_INFO_STARTED:
      return {
        ...state,
        isLoading: true,
        error: { isError: false, message: "" },
      };

    case STATE_INFO_SUCCESS:
      return { ...state, isLoading: false, data: payload };

    case STATE_INFO_FAILED:
      return {
        ...state,
        isLoading: false,
        error: { isError: true, message: payload },
      };

    default:
      return state;
  }
}

export default stateReducer;
