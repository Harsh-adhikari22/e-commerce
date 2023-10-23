import { AuthSlice, createAuthSlice } from "./slices/auth-slice";
import { create } from "zustand";
import { ToastsSlice, createToastsSlice } from "./slices/toast-slice";
type StoreState = AuthSlice & ToastsSlice;
export const useAppStore = create<StoreState>()((...a) => ({
  ...createAuthSlice(...a),
  ...createToastsSlice(...a),
}));
