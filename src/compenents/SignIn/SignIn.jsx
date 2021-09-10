export default function LogIn() {
  return (
    <form action="">
      <div className="w-136 h-56 mt-5 m-auto bg-gray-300 ">
        <div className="flex justify-center pt-20 mb-2 ">
          <div className="w-40">user Name</div>
          <input className="border-black border-2 hover:border-blue-300" />
        </div>
        <div className="flex justify-center ">
          <div className="w-40">Passward</div>
          <input className="border-black border-2 hover:border-blue-300" />
        </div>
        <button className="text-center w-40 block m-auto mt-2 bg-red-500 text-white p-2">
          SighnIn
        </button>
      </div>
    </form>
  );
}
