import { useSelector } from "react-redux";
import Item from "./item";

function ItemsList() {
  const items = useSelector((state) => state.itemHandler);
  return (
    <div>
      {items.map((item, index) => {
        return <Item data={item} key={`item-${index}`} index={index}></Item>;
      })}
      ;
    </div>
  );
}

export default ItemsList;
