import { useSelector } from "react-redux";
import { SelectionButton } from "./SelectionButton";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

export function AccountPage() {
  const isSignIn = useSelector((state) => state.isSignIn);
  return (
    <div className="flex mt-8 lg:m-0">
      <div className="w-10/12  overflow-hidden hidden lg:block ">
        <img
          src="/images/categories/loginBackground.jpg"
          className="h-screen 	"
        />
      </div>
      <div className="w-136 h-min-56 p-5 font-medium mt-5 m-auto ">
        <div className="text-center font-bold font-serif text-5xl">
          Dionysus Project
        </div>
        <SelectionButton />
        {isSignIn ? <SignIn /> : <SignUp />}
      </div>
    </div>
  );
}
