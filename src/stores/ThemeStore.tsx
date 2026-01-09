import type { Theme } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ThemeStoreState = {
  theme: Theme;
  setTheme: (theme: Theme) => void; // Set theme
  toggleTheme: () => void; // Toggle theme
};

// Create store and save to localStorage
const useThemeStore = create<ThemeStoreState>()(
  persist(
    (set) => ({
      theme: "light",
      setTheme: (theme) => set(() => ({ theme })),
      toggleTheme: () =>
        set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
    }),
    {
      name: "theme",
    }
  )
);

export default useThemeStore;
