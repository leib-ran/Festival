import { Route } from "react-router";
import { auth } from "../../firebase";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={(props) => {}}></Route>;
};
