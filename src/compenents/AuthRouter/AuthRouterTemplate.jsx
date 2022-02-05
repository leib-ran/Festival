import { Redirect, Route } from "react-router-dom";
import { isLogin } from "../../actions";

export const AuthRouter = ({
  component: Component,
  isLogin,
  pathRe,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isLogin) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: pathRe || "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};
