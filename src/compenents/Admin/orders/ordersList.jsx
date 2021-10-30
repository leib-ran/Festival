import * as React from "react";
import {
  List,
  Datagrid,
  ImageField,
  TextField,
  ArrayField,
  ReferenceField,
  NumberField,
  DateField,
  EditButton,
} from "react-admin";

// const tabs = [
//   { id: "ordered", name: "ordered" },
//   { id: "delivered", name: "delivered" },
//   { id: "cancelled", name: "cancelled" },
// ];
export const OrderList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <DateField source="date" />
      <TextField source="reference" />
      <ReferenceField source="ProductID" reference="products">
        <TextField source="title" />
      </ReferenceField>

      <ArrayField source="costumer">
        <Datagrid>
          <ImageField source={"avatar"} />
          <TextField source="firstName" />
          <TextField source="lastName" />
        </Datagrid>
      </ArrayField>
      <TextField source="address" />
      <NumberField source="NbItem" />
      <TextField source="Total" />
      <EditButton />
    </Datagrid>
  </List>
);
