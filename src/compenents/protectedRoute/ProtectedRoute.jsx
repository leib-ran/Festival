import { Redirect, Route } from "react-router";
import { auth } from "../../firebase";
import { login } from "../../helper/PathName";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (false) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: login.getPath(),
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    ></Route>
  );
};
