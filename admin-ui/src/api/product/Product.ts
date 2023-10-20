import { Decimal } from "decimal.js";
import { Category } from "../category/Category";
import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Product = {
  carbonfootprint: Decimal;
  category?: Category | null;
  colors: JsonValue;
  createdAt: Date;
  description: JsonValue;
  discountedprice: number;
  id: string;
  images: JsonValue;
  orders?: Array<Order>;
  reviews?: Array<Review>;
  susscore: Decimal | null;
  title: string;
  titleprice: number;
  updatedAt: Date;
  variants: JsonValue;
};
