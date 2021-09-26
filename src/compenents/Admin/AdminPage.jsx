// import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource, EditGuesser, ListGuesser } from "react-admin";
import { dataProvider, history } from "../../helper/adminConsts";
import { OrderList } from "./orders/ordersList";
import { ProductsCreate } from "./products/ProductCreate";
import { ProductList } from "./products/ProductsList";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import PersonIcon from "@material-ui/icons/Person";
import GroupIcon from "@material-ui/icons/Group";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import dashbord from "./Dashboard/dashbord";
import { FirebaseAuthProvider } from "react-admin-firebase";
import { firebaseConfig } from "../../firebase";

const options = {};
const authProvider = FirebaseAuthProvider(firebaseConfig, options);

// const dataProvider = jsonServerProvider("http://localhost:5000");
export function AdminPage() {
  return (
    <Admin
      dataProvider={dataProvider}
      authProvider={authProvider}
      dashboard={dashbord}
      history={history}
    >
      <Resource
        name="products"
        icon={CardGiftcardIcon}
        list={ProductList}
        edit={EditGuesser}
        create={ProductsCreate}
      />
      <Resource
        name="orders"
        list={OrderList}
        icon={AttachMoneyIcon}
        // edit={EditGuesser}
        // create={ProductsCreate}
      />
      <Resource
        name="users"
        list={ListGuesser}
        icon={PersonIcon}
        // edit={EditGuesser}
        // create={ProductsCreate}
      />
      <Resource
        name="userRoles"
        list={ListGuesser}
        // edit={EditGuesser}
        // create={ProductsCreate}
      />
      <Resource
        name="clients"
        list={ListGuesser}
        icon={GroupIcon}
        // edit={EditGuesser}
        // create={ProductsCreate}
      />
      <Resource
        name="users"
        list={ListGuesser}
        icon={PersonIcon}
        // edit={EditGuesser}
        // create={ProductsCreate}
      />
    </Admin>
  );
}
