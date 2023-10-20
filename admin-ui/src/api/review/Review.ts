import { Product } from "../product/Product";
import { Decimal } from "decimal.js";
import { User } from "../user/User";

export type Review = {
  createdAt: Date;
  id: string;
  product?: Product | null;
  rating: Decimal;
  updatedAt: Date;
  user?: User | null;
};
