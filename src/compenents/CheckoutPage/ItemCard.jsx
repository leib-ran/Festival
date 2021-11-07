export function ItemCardCheckOut(props) {
  const item = props.item;

  return (
    <div className={"m-2"}>
      <div className="flex">
        <img className="w-24" src={item.imageUrl} alt={`item`} />
        <div className="m-2">
          <div>{item.productName}</div>
          <div>{item.price}$</div>
          <div>Qty:{props.quan}</div>
          <select name="" id="">
            <option value="">DHL</option>
            <option value="">ups</option>
          </select>
        </div>
      </div>
    </div>
  );
}
