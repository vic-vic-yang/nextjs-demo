import { create } from 'zustand';
import { persist } from "zustand/middleware"

export const useThemeStore = create(persist(
  () => ({
    type: ''
  }),
  {
    name: "theme", // name of item in the storage (must be unique)
    getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
  }
))
