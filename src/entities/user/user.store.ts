import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";
import type { UserInfo } from "./user.entity";

type AuthState = {
  hasHydrated: boolean; // hydration 완료 후 값을 사용하도록 하는 변수
  userInfo: UserInfo | null;
  isLoggedIn: boolean;
};
interface AuthAction {
  setHydrated: (hydrate: boolean) => void;
  setUserInfo: (info: UserInfo) => void;
  clearUserInfo: () => void;
  setLoggedIn: (state: boolean) => void;
}

const initialUserState: AuthState = {
  hasHydrated: false,
  userInfo: null,
  isLoggedIn: false,
};

export const useUserStore = create<AuthState & AuthAction>()(
  devtools(
    persist(
      (set) => ({
        ...initialUserState,
        setLoggedIn: (v: boolean) => set({ isLoggedIn: v }),
        setUserInfo: (info: UserInfo) => set({ userInfo: info }),
        setHydrated: (v: boolean) => set({ hasHydrated: v }),
        clearUserInfo: () => set(initialUserState),
      }),
      {
        name: "auth",
        storage: createJSONStorage(() => sessionStorage),
        onRehydrateStorage: () => (state) => {
          state?.setHydrated?.(true);
        },
      }
    ),
    { name: "authStore" }
  )
);
