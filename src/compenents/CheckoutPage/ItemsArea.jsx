import { useSelector } from "react-redux";
import { BackToShopButton } from "./BackToShopButton";
import { ItemCardCheckOut } from "./ItemCard";

export function ItemsArea(props) {
  const items = useSelector((state) => state.itemHandler);
  const item = useSelector((state) => state.itemCheckOut);
  let sum = 0;
  return (
    <div>
      <div className="mb-2">
        <BackToShopButton />
      </div>
      {item ? (
        <ItemCardCheckOut item={item.product} quan={item.quan} />
      ) : (
        items.map((element, index) => {
          sum += Number(element.product.price) * Number(element.quan);
          const item = element.product;
          return (
            <ItemCardCheckOut key={index} item={item} quan={element.quan} />
          );
        })
      )}
      <hr />
      <div className="flex justify-between w-11/12 m-auto">
        <div className="font-bold  ">Total(includes VAT)</div>
        <div>{(sum + sum * 0.17).toFixed(2)}</div>
      </div>
    </div>
  );
}
