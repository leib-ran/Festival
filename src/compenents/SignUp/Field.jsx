function Field(props) {
  return (
    <div>
      <div>
        <div className="flex text-left mt-4">
          <div text-left className="w-40">
            {props.name}
          </div>
          <input
            type={props.type}
            className="w-96 rounded-lg border-black h-8 border-2 focus:border-transparent focus:ring-2 focus:outline-none focus:ring-blue-800"
          />
        </div>
      </div>
    </div>
  );
}
export default Field;
