import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="carbonfootprint" source="carbonfootprint" />
        <ReferenceField
          label="category"
          source="category.id"
          reference="Category"
        >
          <TextField source={CATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="colors" source="colors" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="discountedprice" source="discountedprice" />
        <TextField label="ID" source="id" />
        <TextField label="images" source="images" />
        <TextField label="susscore" source="susscore" />
        <TextField label="title" source="title" />
        <TextField label="titleprice" source="titleprice" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label=" variants" source="variants" />
      </Datagrid>
    </List>
  );
};