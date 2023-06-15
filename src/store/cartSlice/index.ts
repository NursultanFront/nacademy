import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Product } from '../../api/product/types';

interface CartState {
  cart: Product[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cart.push(action.payload);
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
