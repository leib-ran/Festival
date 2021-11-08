import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiFairy } from "react-icons/gi";

export default function Avatar() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 ">
      <div className=" w-40 h-40 bg-red-300 flex flex-col rounded-full ">
        <div className="  text-8 mt-16 text-4xl">
          <GiFairy className="w-40 h-16 rounded-full" />
        </div>
        <div className="rounded-full w-4 h-4 bg-white">+</div>
      </div>
    </div>
  );
}
