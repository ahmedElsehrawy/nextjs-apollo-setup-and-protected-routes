import { create } from "zustand";

//user Store
interface State {
  username: string | null;
}

interface Action {
  setUsername: Function;
  removeUsername: Function;
}

export type CombinableState = State & Action;

export const useStore = create<CombinableState>((set) => ({
  username: "ahmed elsehrawy",
  setUsername: (newUsername: string) => set(() => ({ username: newUsername })),
  removeUsername: () => set({ username: null }),
}));

// Dummy Store
export interface Dummy {
  text: string;
}
export const useDummyStore = create<Dummy>((set) => ({
  text: "start",
}));
