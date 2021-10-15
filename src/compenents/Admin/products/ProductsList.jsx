import * as React from "react";
import {
  List,
  Datagrid,
  ImageField,
  TextField,
  NumberField,
  EditButton,
} from "react-admin";
// import PostIcon from "@material-ui/icons/Book";

// const productFilter = [
//   <TextInput source ="q" lable="Search" alwaysOn />
//   <ReferenceInput source=""/>
// ]

export const ProductList = (props) => (
  <List {...props}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <ImageField source="imageUrl" />
      <TextField source="title" />
      <TextField source="color" />
      <TextField source="department" />
      <TextField source="productName" />
      <NumberField source="price" />
      <TextField source="productMaterial" />
      <TextField source="stokeQuantity" />
      <TextField source="productDescription" />
      <TextField source="companyName" />
      <TextField source="rank" />
      <EditButton />
    </Datagrid>
  </List>
);
