import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../api/product/types';

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  totalPrice: number;
}

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const productId = action.payload.id;
      const existingItem = state.cart.find((item) => item.product.id === productId);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.cart.push({ product: action.payload, quantity: 1 });
      }

      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      const productId = action.payload.id;
      const existingItem = state.cart.find((item) => item.product.id === productId);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity--;
        } else {
          state.cart = state.cart.filter((item) => item.product.id !== productId);
        }
      }
      state.totalPrice -= action.payload.price;
    },

    clearCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
