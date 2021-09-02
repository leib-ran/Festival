export default function Field(props) {
  return (
    <div className="w-1/3 m-2">
      <label>
        <div>{props.name}</div>
        <input
          className="border-2 border-black"
          name={props.name}
          type="text"
          onChange={(e) => {
            props.changeHandler(e);
          }}
        />
      </label>
      <div className="text-red-500 text-xs h-2"> {props.show && props.msg}</div>
    </div>
  );
}
