import { useRef } from "react";
import { addWord } from "../../../helper/config";

export function BarChoice() {
  const pressed = useRef(null);
  const list = ["Festival List", "Festival"];
  function click(params) {}
  return (
    <div>
      <div className="text-white p-4 h-16  justify-between flex text-3xl">
        {list.map((element, index) => {
          return (
            <div key={index}>
              <div
                onClick={(e) => handleClick(e)}
                className="hover:text-yellow-500 pt-2 border-yellow-500 cursor-pointer"
              >
                {element}
              </div>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

function handleClick(e) {
  e.target.className = addWord(GetBorder(), e.target.className);
}

function GetBorder() {
  return "border-t-4";
}
