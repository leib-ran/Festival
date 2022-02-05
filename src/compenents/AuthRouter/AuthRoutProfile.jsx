import { useSelector } from "react-redux";
import { isObjectEmpty } from "../../helper/config";
import { AuthRouter } from "./AuthRouterTemplate";

export function AuthRoutProfile(props) {
  const user = useSelector(async (state) => await state.userGlobalState);
  return <AuthRouter {...props} condition={!isObjectEmpty(user)} />;
}
