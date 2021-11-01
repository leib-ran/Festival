import { useSelector } from "react-redux";
import { BackToShopButton } from "./BackToShopButton";
import { ItemCardCheckOut } from "./ItemCard";

export function ItemsArea(props) {
  const items = useSelector((state) => state.itemHandler);
  const item = useSelector((state) => state.itemCheckOut);
  return (
    <div>
      <div className="mb-2">
        <BackToShopButton />
      </div>
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
