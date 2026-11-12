import { router } from "expo-router";
import { create } from "zustand";

type SearchType = "events" | "schools" | "users";
type SearchStore = {
  searchQuery: string;
  searchType: SearchType;

  setSearchQuery: (value: string) => void;
  setSearchType: (value: "events" | "schools" | "users") => void;
  openSearchScreen: (type: SearchType) => void;
};

export const useSearchStore = create<SearchStore>((set) => ({
  searchQuery: "",
  searchType: "events",

  openSearchScreen: (type) => {
    set({ searchType: type, searchQuery: "" });
    router.push("/SharedScreen/searchEventScreen");
  },
  setSearchQuery: (value) => set({ searchQuery: value }),
  setSearchType: (value) => set({ searchType: value }),
}));
