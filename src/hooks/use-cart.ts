import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { Product } from "@/types/Interfaces";
import { UUID } from "crypto";

interface CartStore {
  items: Product[];
  addNewItem: (data: Product) => void;
  OneMoreItem: (id: UUID) => void;
  OneLessItem: (id: UUID) => void;
  removeItem: (id: UUID) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addNewItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          return alert("Item já está no carrinho");
        }
        set({ items: [...get().items, data] });
        return alert("Produto adicionado ao carrinho!");
      },
      OneMoreItem: (id: UUID) => {
        set((state) => {
          const existingItem = state.items.find((item) => item.id === id);

          if (existingItem) {
            // Aumente a quantidade em 1
            existingItem.qnt += 1;
          }

          return { ...state };
        });
      },
      OneLessItem: (id: UUID) => {
        const existingItem = get().items.find((item) => item.id === id);

        if (existingItem?.qnt === 1) {
          return get().removeItem(id);
        }

        set((state) => {
          const updatedItems = state.items.map((item) => {
            if (item.id === id) {
              return { ...item, qnt: item.qnt - 1 };
            }
            return item;
          });

          return { ...state, items: updatedItems };
        });
      },
      removeItem: (id: UUID) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
