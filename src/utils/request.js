import axios from "axios";
import { store } from "../App";

export const requestConstructor = () => {
  const {
    auth: {
      user: { ID, token }
    }
  } = store.getState();
  return axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: { UserID: ID, Authorization: `Bearer ${token}` }
  });
};

export default requestConstructor;
