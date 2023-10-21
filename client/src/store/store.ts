import { AuthSlice, createAuthSlice } from "./slices/auth-slice";
import { create } from "zustand";
type StoreState = AuthSlice;
export const useAppStore = create<StoreState>()((...a) => ({
  ...createAuthSlice(...a),
}));
