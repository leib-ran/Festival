import { useRef } from "react";
import auth from "../../auth";
import Field from "./Field";
export default function SignUp(props) {
  const email = useRef();
  const passward = useRef();
  return (
    <div className="w-120 ml-auto mr-auto font-bold text-center text-2 font-serif">
      <div className="bg-gray-100 p-5 rounded-2xl	">
        <div className="text-5xl">SIGN UP</div>
        <form action="">
          <Field name="First name" type="text" />
          <Field name=" Last name" type="text" />
          <Field name="Email" type="email" />
          <input ref={email} />
          <Field name="Passward" type="passward" ref={passward} />
          <input ref={passward} />
          <Field name="Confirm passward" type="passward" />
          <button
            className="bg-red-300 text-white mt-2 p-2 rounded-lg w-40 text-2xl"
            onClick={(e) => {
              e.preventDefault();
              auth.signup(email.current.value, passward.current.value);
            }}
          >
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}
