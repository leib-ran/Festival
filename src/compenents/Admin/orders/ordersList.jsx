import * as React from "react";
import {
  List,
  Datagrid,
  ImageField,
  BooleanField,
  TextField,
  ArrayField,
  FieldTitleProps,
  NumberField,
  DateField,
  EditButton,
} from "react-admin";

export const OrderList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <DateField source="date" />
      <TextField source="reference" />
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
