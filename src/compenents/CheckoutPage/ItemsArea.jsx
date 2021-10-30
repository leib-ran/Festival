import { useSelector } from "react-redux";
import { ItemCardCheckOut } from "./ItemCard";

export function ItemsArea(props) {
  const items = useSelector((state) => state.itemHandler);
  const item = useSelector((state) => state.itemCheckOut);
  return (
    <div>
      {item ? (
        <ItemCardCheckOut item={item.product} quan={item.quan} />
      ) : (
        items.map((element, index) => {
          const item = element.product;
          return (
            <ItemCardCheckOut key={index} item={item} quan={element.quan} />
          );
        })
      )}
    </div>
  );
}
