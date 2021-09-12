import auth from "../../auth";
import GoogleButton from "react-google-button";
import { useRef } from "react";
import { facebookProvider, googleProvider } from "../../authMethod";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LogIn(props) {
  const email = useRef(null);
  const passward = useRef(null);
  const handelOnClick = async (provider) => {
    const res = auth.socialMediaAuth(provider);
  };

  return (
    <form action="">
      <div className="w-136 h-min-56 p-5 font-medium mt-5 m-auto bg-gray-300">
        <div className="text-center font-bold text-5xl">Sign In</div>
        <div className="flex justify-center pt-20 mb-2 ">
          <div className="w-40">Email</div>
          <input
            ref={email}
            className="border-black border-2 hover:border-blue-300"
          />
        </div>
        <div className="flex justify-center ">
          <div className="w-40">Passward</div>
          <input
            className="border-black border-2 hover:border-blue-300"
            ref={passward}
          />
        </div>
        <button
          className="text-center w-40 block m-auto mt-2 bg-red-500 text-white p-2"
          onClick={(e) => {
            e.preventDefault();
            console.log(passward.current.value);
            auth.login(email.current.value, passward.current.value, () =>
              props.history.push("/")
            );
          }}
        >
          Sign In
        </button>
        <div className="m-auto w-full text-center">
          <div className="ml-auto mr-auto mt-2  w-60">
            <GoogleButton
              onClick={(e) => handelOnClick(googleProvider)}
            ></GoogleButton>
          </div>
          <button
            className="w-60 mt-2 relative text-white serif font-medium  bg-blue-500 h-12"
            onClick={(e) => {
              e.preventDefault();
              handelOnClick(facebookProvider);
            }}
            version="3.1"
          >
            <FontAwesomeIcon
              className="text-white text-2xl mr-4 text-white absolute left-2 top-3 "
              icon={faFacebook}
            />
            <div className="text-center ml-16">Login with facebook</div>
          </button>
        </div>
      </div>
    </form>
  );
}
