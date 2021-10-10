import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CategorySymbol = (props) => (
  <div
    className={`rounded-full absolute w-${props.length || 12} h-${
      props.length || 12
    } z-10 text-white right-2 bg-gray-800 opacity-75 text-lg  text-center pt-2`}
  >
    <FontAwesomeIcon
      icon={props.icon}
      className={`rounded-full
      } `}
    ></FontAwesomeIcon>
  </div>
);
export default CategorySymbol;
