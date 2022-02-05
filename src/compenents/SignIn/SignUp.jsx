import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { updateSignInState } from "../../actions";
import auth from "../../auth";
import { getUrlDataBase } from "../../helper/config";

export default function SignUp() {
  const [ErrorMsg, setErrorMsg] = useState("");
  const password = useRef(null);
  const email = useRef(null);
  const userName = useRef(null);
  const confirmPassward = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setOpacity(100);
    setTimeout(() => {
      setOpacity(0);
    }, 15000);
  }, [ErrorMsg]);

  return (
    <div>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          if (
            checkPassWard(password.current.value, confirmPassward.current.value)
          ) {
            axios
              .post("http://localhost:8000/users", {
                userName: userName.current.value,
                password: password.current.value,
                userEmail: email.current.value,
              })
              .then((res) => {
                auth.signup(email.current.value, password.current.value);
                dispatch(updateSignInState(true));
                return res;
              })
              .catch((error) => {
                setErrorMsg(error.response.data);
              });
          } else {
            setErrorMsg("The password  arent match");
          }
        }}
      >
        <div
          className={`pt-20 text-center opacity-${opacity} text-sm text-red-800`}
        >
          {ErrorMsg}
        </div>
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
            ref={password}
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
  if (pass === confirmPass) {
    return true;
  }
  return false;
};
