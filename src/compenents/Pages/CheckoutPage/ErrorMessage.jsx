export function ErrorMessage(props) {
  return (
    <div
      className={`text-red-500 text-sm opacity-${props.opacity} transition duration-1000`}
    >
      {message(props.err, props.name)}
    </div>
  );
}

function message(err, name) {
  const msg = err[name] || "";
  if (msg.length == 0) {
    return;
  } else {
    {
      return msg;
    }
  }
}
