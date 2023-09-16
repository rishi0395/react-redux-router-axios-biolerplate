import {
  STATE_INFO_STARTED,
  STATE_INFO_FAILED,
  STATE_INFO_SUCCESS,
} from "./types";

import createRequestAction from "../createRequestAction";
import { getStateInfo } from "../../Api/stateInfoApi";

export const stateInfoStarted = () => {
  return {
    type: STATE_INFO_STARTED,
  };
};

export const stateInfoSuccess = (data) => {
  return {
    type: STATE_INFO_SUCCESS,
    payload: data,
  };
};

export const stateInfoFailed = (error) => {
  return {
    type: STATE_INFO_FAILED,
    payload: error,
  };
};

export function fetchStateInfo(stateName) {
  return createRequestAction({
    onStart: (dispatch) => dispatch(stateInfoStarted()),
    request: () => getStateInfo(stateName),
    onSuccess: (dispatch, resp) => {
      if (Object.keys(resp).length) {
        dispatch(stateInfoSuccess(resp?.data?.hits));
      } else {
        dispatch(stateInfoFailed("No data found..."));
      }
    },
    onFailure: (dispatch, error) => {
      dispatch(stateInfoFailed("something went wrong..."));
    },
  });
}
