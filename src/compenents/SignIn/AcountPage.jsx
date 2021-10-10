import { useSelector } from "react-redux";
import { SelectionButton } from "./SelectionButton";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export function AcountPage() {
  const isSignIn = useSelector((state) => state.isSignIn);
  return (
    <div className="flex">
      <div className="w-10/12  overflow-hidden">
        <img
          src="/images/categories/loginBackground.jpg"
          className="h-screen 	"
        />
      </div>
      <div className="w-136 h-min-56 p-5 font-medium mt-5 m-auto ">
        <div className="text-center font-bold font-serif text-5xl">
          Dionysus Project
        </div>
        <SelectionButton></SelectionButton>
        {isSignIn ? <SignIn></SignIn> : <SignUp />}
      </div>
    </div>
  );
}
