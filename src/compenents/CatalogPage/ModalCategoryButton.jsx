export default function CategoryButton(props) {
  return (
    <div>
      <div className="bg-white shadow-lg w-1/4 cursor-pointer rounded-md p-2 text-black m-2 text-center hover:bg-black hover:text-white shadow-lg">
        {props.name}
      </div>
    </div>
  );
}
