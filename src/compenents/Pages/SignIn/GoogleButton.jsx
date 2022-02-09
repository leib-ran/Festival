import { FcGoogle } from "react-icons/fc";

export function GoogleButton() {
  return (
    <div className="w-96 border-blue-300 bg-blue-500 hover:bg-blue-600 flex border-2 h-10">
      <div className="bg-white h-full pt-2 pl-2 w-12">
        <FcGoogle className="text-2xl" />
      </div>
      <div className="text-white pl-6 m-auto text-center">
        Continue With Google
      </div>
    </div>
  );
}
