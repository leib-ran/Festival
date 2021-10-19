import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { isObjectEmpty } from "../../helper/config";

export const AuthRouter = ({
  component: Component,
  condition,
  pathRe,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (condition) {
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
