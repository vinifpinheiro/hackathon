import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  isLogged?: boolean;
  setIsLogged?: (isLogged: boolean) => void;
}

const userStore = create(
  persist<User>(
    (set) => ({
      isLogged: false,
      setIsLogged: (isLogged: boolean) => set({ isLogged }),
    }),
    {
      name: "user-storage",
      getStorage: () => localStorage,
    },
  ),
);

export default userStore;
