import React, { useEffect, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateInfoStarted } from "../redux/actions/stateActions";
import { getState } from "../redux/selectors";

function Home() {
  const state = useSelector(getState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(stateInfoStarted());
    console.log(state);
  }, []);

  return <div>Home</div>;
}

export default memo(Home);
