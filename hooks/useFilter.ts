// Zustand is a global state management tool that helps us update the state
// of the search and filter functionality

import { create } from "zustand";

import { persist, createJSONStorage } from "zustand/middleware";

interface FilterDataType {
  category: { _id: string; name: string };
  size: { _id: string; name: string };
  orderOfItems: string;
}

interface UseFilterInterface {
  filteredData: FilterDataType;
  addCategory: (category: { _id: string; name: string }) => void;
  addOrderOfItems: (orderOfItems: { orderOfItems: string }) => void;
  addSize: (size: { _id: string; name: string }) => void;
}

export const useFilter = create(
  persist<UseFilterInterface>(
    (set, get) => ({
      filteredData: {
        category: {
          _id: "",
          name: "",
        },
        size: {
          _id: "",
          name: "",
        },
        orderOfItems: "createdAt asc",
      },
      addCategory: (category) => {
        const prev = get().filteredData;

        set({ filteredData: { ...prev, ...category } });
      },
      addSize: (size) => {
        const prev = get().filteredData;

        set({ filteredData: { ...prev, ...size } });
      },

      addOrderOfItems: (orderOfItems) => {
        const prev = get().filteredData;
        set({ filteredData: { ...prev, ...orderOfItems } });
      },

      removeAllFilter: () => {
        set({
          filteredData: {
            category: {
              _id: "",
              name: "",
            },
            size: {
              _id: "",
              name: "",
            },
            orderOfItems: "",
          },
        });
      },
    }),
    {
      name: "@cart-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
