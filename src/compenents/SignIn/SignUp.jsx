import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateSignInState } from "../../actions";
import auth from "../../auth";

export default function SignUp() {
  const [ErrorMsg, setErrorMsg] = useState("");
  const passward = useRef(null);
  const email = useRef(null);
  const userName = useRef(null);
  const confirmPassward = useRef(null);
  const dispatch = useDispatch();
  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          // if (
          //   checkPassWard(
          //     passward.current.value,
          //     confirmPassward.current.value
          //   )
          // ) {
          //   setErrorMsg("very good");
          // } else {
          //   setErrorMsg("The passward arent match");
          // }
          axios
            .post("http://localhost:8000/users", {
              firstName: userName.current.value,
              userEmail: email.current.value,
            })
            .then((res) => {
              auth.signup(email.current.value, passward.current.value);
              dispatch(updateSignInState(true));
              return res;
            })
            .catch((error) => {
              setErrorMsg(error.response.data.error);
            });
        }}
      >
        <div className="pt-20 text-center text-sm text-red-800">{ErrorMsg}</div>
        <div className="flex justify-center  mb-2 ">
          <input
            className="block border-black h-10 pl-2 w-96 border-2 hover:border-blue-300"
            placeholder="User Name"
            ref={userName}
          />
        </div>
        <div className="flex justify-center mb-2 ">
          <input
            type="emafil"
            className="block border-black h-10 pl-2 w-96 border-2 hover:border-blue-300"
            placeholder="Email Address"
            ref={email}
          />
        </div>
        <div className="flex justify-center mb-2">
          <input
            type="password"
            className="border-black  h-10 pl-2 w-96 border-2 hover:border-blue-300"
            placeholder="Passward"
            ref={passward}
          />
        </div>
        <div className="flex justify-center  mb-2">
          <input
            className="border-black  h-10 pl-2 w-96 border-2 hover:border-blue-300"
            placeholder="confirmation Passward"
            type="password"
            ref={confirmPassward}
          />
        </div>
        <button className="m-auto block text-white p-2 font-serif bg-red-500">
          SIGN UP
        </button>
      </form>
    </div>
  );
}

const handleSubmit = () => {};
const checkPassWard = (pass, confirmPass) => {
  console.log(pass, confirmPass);
  if (pass === confirmPass) {
    return true;
  }
  return false;
};
