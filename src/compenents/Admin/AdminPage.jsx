// import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, EditGuesser } from "react-admin";
import { dataProvider, history } from "../../helper/adminConsts";
import { OrderList } from "./orders/ordersList";
import { ProductsCreate } from "./products/ProductCreate";
import { ProductList } from "./products/ProductsList";

// const dataProvider = jsonServerProvider("http://localhost:5000");
export function AdminPage() {
  return (
    <Admin dataProvider={dataProvider} history={history}>
      <Resource
        name="products"
        list={ProductList}
        edit={EditGuesser}
        create={ProductsCreate}
      />
      <Resource
        name="orders"
        list={OrderList}
        // edit={EditGuesser}
        // create={ProductsCreate}
      />
    </Admin>
  );
}
