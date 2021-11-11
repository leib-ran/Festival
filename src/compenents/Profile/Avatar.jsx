import { useSelector } from "react-redux";
export default function Avatar() {
  const user = useSelector((state) => state.userGlobalState);
  console.log(user);
  return (
    <div className=" w-40 h-40 bg-blue-600 jusitfy-center flex flex-col rounded-full ">
      <div className="text-center pt-8 text-white text-7xl line-height-2">
        {user.firstName[0].toLocaleUpperCase()}
      </div>
      <div className=" m-auto text-8  text-4xl"></div>
    </div>
  );
}
