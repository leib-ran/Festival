import { Redirect, Route } from "react-router";
import { auth } from "../../firebase";
import { login } from "../../helper/PagesName";

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
                pathname: login,
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
