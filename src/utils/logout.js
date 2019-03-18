import { store } from "../App";
import { logout as logoutAction } from "../redux/actions";

export const logout = () => {
  const { auth } = store.getState();
  console.log(store);
  store.dispatch(logoutAction());
};

export default logout