import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../../api';
import { Product } from '../../api/product/types';

interface ProductsState {
  data: Product[];
  loading: boolean;
  error: string | null;
}

type SortOrder = 'asc' | 'desc';

interface SortPayload {
  order: SortOrder;
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  try {
    const response = await api.product.list();
    return response.products;
  } catch (error) {
    throw new Error('Failed to fetch products.');
  }
});

const initialState: ProductsState = {
  data: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    sortByPrice: (state, action: PayloadAction<SortPayload>) => {
      const { order } = action.payload;
      state.data.sort((a, b) => {
        if (order === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    },
    sortByName: (state, action: PayloadAction<SortPayload>) => {
      const { order } = action.payload;
      state.data.sort((a, b) => {
        if (order === 'asc') {
          return a.title.localeCompare(b.title);
        } else {
          return b.title.localeCompare(a.title);
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch products.';
      });
  },
});

export const { sortByPrice, sortByName } = productsSlice.actions;
export default productsSlice.reducer;
