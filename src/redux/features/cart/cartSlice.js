import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isProductExist = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (isProductExist) {
        isProductExist.quantity = isProductExist?.quantity + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }

      state.total += action.payload.price;
    },

    decreaseProduct: (state, action) => {
      const isProductExist = state.products.find(
        (product) => product._id === action.payload._id
      );
      if (isProductExist && isProductExist.quantity > 1) {
        isProductExist.quantity = isProductExist?.quantity - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== action.payload._id
        );
      }
      state.total -= action.payload.price;
    },

    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => product._id !== action.payload._id
      );

      state.total -= action.payload.price * action.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, decreaseProduct } = cartSlice.actions;
export default cartSlice.reducer;
