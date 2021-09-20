// import jsonServerProvider from "ra-data-json-server";
import { Admin, Resource } from "react-admin";
import { dataProvider, history } from "../../helper/adminConsts";

// const dataProvider = jsonServerProvider("http://localhost:5000");

export function AdminPage() {
  return <Admin dataProvider={dataProvider} history={history} />;
}
