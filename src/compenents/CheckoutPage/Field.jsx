export default function Field(props) {
  return (
    <div>
      <label>
        {props.name}
        <input
          className="border-2 border-black"
          name={props.name}
          type="text"
          onChange={(e) => {
            props.changeHandler(e);
          }}
        />
      </label>
      <div> {props.show && props.msg}</div>
    </div>
  );
}
