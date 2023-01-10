import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cart.filter(
            (item) => item.id !== cartItem.id
          );

          state.cart = nextCartItems;
        }

        return state;
      });
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        // item.quantity = 1;
        const nextCartItems = state.cart.filter(
          (item) => item.id !== action.payload.id
        );

        state.cart = nextCartItems;
      } else {
        item.quantity--;
      }
    },

    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
