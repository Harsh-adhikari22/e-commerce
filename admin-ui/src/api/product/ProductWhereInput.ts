import { DecimalFilter } from "../../util/DecimalFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type ProductWhereInput = {
  carbonfootprint?: DecimalFilter;
  category?: CategoryWhereUniqueInput;
  colors?: JsonFilter;
  description?: JsonFilter;
  discountedprice?: FloatFilter;
  id?: StringFilter;
  images?: JsonFilter;
  orders?: OrderListRelationFilter;
  reviews?: ReviewListRelationFilter;
  susscore?: DecimalNullableFilter;
  title?: StringFilter;
  titleprice?: FloatFilter;
  variants?: JsonFilter;
};
