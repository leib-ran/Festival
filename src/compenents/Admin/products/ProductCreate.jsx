import {
  Create,
  ReferenceInput,
  SimpleForm,
  SelectInput,
  TextInput,
  ImageInput,
  NumberInput,
} from "react-admin";

export const ProductsCreate = (props) => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput source="id" reference="products">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <ImageInput source="imageUrl" />
      <TextInput multiline source="color" />
      <TextInput source="title" />
      <TextInput source="department" />
      <TextInput source="productName" />
      <NumberInput source="price" />
      <TextInput source="productMaterial" />
      <NumberInput source="stokeQuantity" />
      <TextInput source="productDescription" />
      <TextInput source="companyName" />
      <NumberInput source="rank" />
    </SimpleForm>
  </Create>
);
