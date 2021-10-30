export function ItemCardCheckOut(props) {
  const item = props.item;

  return (
    <div>
      <div className="flex">
        <img className="w-64" src={item.imageUrl} alt={`item`} />
        <div>
          <div>{item.productName}</div>
          <div>{item.productDescription}</div>
          <div>{item.price}$</div>
          <div>{props.quan}</div>
          <select name="" id="">
            <option value="">ups</option>
            <option value="">free</option>
            <option value="">DHL</option>
          </select>
        </div>
      </div>
    </div>
  );
}
