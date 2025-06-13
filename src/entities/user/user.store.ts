import { create } from "zustand";
import type { UserInfo } from "./user.entity";

interface UserStore {
  userInfo: UserInfo | null;
  setUserInfo: (info: UserInfo) => void;
  clearUserInfo: () => void;
  isLoggedIn: boolean;
  setLoggedIn: (state: boolean) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userInfo: null,
  setUserInfo: (info: UserInfo) => set({ userInfo: info }),
  clearUserInfo: () => set({ userInfo: null, isLoggedIn: false }),
  isLoggedIn: false,
  setLoggedIn: (state: boolean) => set({ isLoggedIn: state }),
}));
