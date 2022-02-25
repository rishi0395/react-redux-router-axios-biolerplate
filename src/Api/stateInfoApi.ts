import axios from "axios";
import { stateApi } from "./constants";

export const getStateInfo = async (val) => {
  const resp = await axios.get(stateApi(val));
  return resp;
};
