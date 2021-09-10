export default function ModalCategoryButton(props) {
  return (
    <div>
      <div className="bg-white shadow-lg w-96 cursor-pointer rounded-md p-2 text-black m-2 text-center hover:bg-black hover:text-white shadow-lg">
        {props.name}
      </div>
    </div>
  );
}
