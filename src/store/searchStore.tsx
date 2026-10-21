import { create } from "zustand";

type SearchStore = {
  search: string;
  setSearch: (value: string) => void;
  selectedEvent: string | null;

  setSelectedEvent: (event: string | null) => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  search: "",
  setSearch: (value) => set({ search: value }),
  selectedEvent: null,
  setSelectedEvent: (value) => set({ selectedEvent: value }),
}));
