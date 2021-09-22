import { Edit } from "react-admin";
import { SaveButton, DeleteButton } from "react-admin";

<Edit {...props}>
  <SimpleForm toolbar={<CustomToolbar />}>
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
</Edit>;

const CustomToolbar = (props) => (
  <Toolbar {...props} classes={useStyles()}>
    <SaveButton />
    <DeleteButton undoable={false} />
  </Toolbar>
);
