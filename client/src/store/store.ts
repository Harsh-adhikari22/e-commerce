import { AuthSlice, createAuthSlice } from "./slices/auth-slice";
import { create } from "zustand";
import { ToastsSlice, createToastsSlice } from "./slices/toast-slice";
import { CartSlice, createCartSlice } from "./slices/cart-slice";
import { OrdersSlice, createOrdersSlice } from "./slices/orders-slice";
type StoreState = AuthSlice & ToastsSlice & CartSlice & OrdersSlice;
export const useAppStore = create<StoreState>()((...a) => ({
  ...createAuthSlice(...a),
  ...createToastsSlice(...a),
  ...createCartSlice(...a),
  ...createOrdersSlice(...a),
}));
