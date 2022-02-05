import { useSelector } from "react-redux";
import { AuthRouter } from "./AuthRouterTemplate";

export function AuthRouteGeneral(props) {
  const isLogin = useSelector((state) => state.isLogin);
  return <AuthRouter {...props} isLogin={!isLogin} />;
}
