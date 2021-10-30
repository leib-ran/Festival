import { isObjectEmpty } from "ra-core/esm/form/submitErrorsMutators";
import { useSelector } from "react-redux";
import { AuthRouter } from "./AuthRouterTemplate";

export function AuthRouteGeneral(props) {
  const user = useSelector((state) => state.userGlobalState);
  return <AuthRouter {...props} condition={isObjectEmpty(user)} />;
}
