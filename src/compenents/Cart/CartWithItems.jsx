import { useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import PaymentArea from "./PaymentArea";

export function CartWithItems() {
  const items = useSelector((state) => state.itemHandler);
  return (
    <div>
      <div className="md:flex md:justify-center ">
        <div className="md:w-136 w-full mt-2 mr-4	">
          <ItemsList />
        </div>
        <PaymentArea data={items} />
      </div>
    </div>
  );
}
