import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { isObjectEmpty } from "../../helper/config";
import { profile } from "../../helper/PathName";

{
  /* <Route exact path={profile.getPath()} component={Profile} />; */
}

export const AuthRouter = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.userGlobalState);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isObjectEmpty(user)) {
          return <Component />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/profile",
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
