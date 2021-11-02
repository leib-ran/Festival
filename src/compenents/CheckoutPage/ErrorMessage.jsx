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
  const filtered = findField(err, name) || "";
  if (filtered.length == 0) {
    return;
  } else {
    return filtered.message;
  }
}

function findField(err, name) {
  return err.filter((element) => {
    return element.field === name;
  })[0];
}
