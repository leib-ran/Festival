import { useDispatch, useSelector } from "react-redux";
import { updateSignInState } from "../../actions";

export function SelectionButton() {
  const blueBg = "bg-blue-400 text-white";
  const isSignIn = useSelector((state) => state.isSignIn);
  const dispach = useDispatch();
  return (
    <div className="text-center">
      <button
        className={`border-2 ${!isSignIn || blueBg} h-full shadow-lg p-2`}
        onClick={(e) => {
          dispach(updateSignInState(true));
        }}
      >
        SignIn
      </button>
      <button
        className={`border-2 ${isSignIn || blueBg} h-full shadow p-2`}
        onClick={(e) => {
          dispach(updateSignInState(false));
        }}
      >
        SignUp
      </button>
    </div>
  );
}
