function createRequestAction({ onStart, request, onFailure, onSuccess }) {
  return async (dispatch, state) => {
    onStart(dispatch);
    try {
      const value = await request(state);
      return onSuccess(dispatch, value);
    } catch (error) {
      return onFailure(dispatch, error);
    }
  };
}
export default createRequestAction;
