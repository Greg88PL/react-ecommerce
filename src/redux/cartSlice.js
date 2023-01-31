import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        toast.info(`Increased ${action.payload.title} quantity in cart`, {
          position: "bottom-left",
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.title} added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    removeFromCart(state, action) {
      state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cart.filter(
            (item) => item.id !== cartItem.id
          );

          state.cart = nextCartItems;
          toast.error(`${action.payload.title} removed from cart`, {
            position: "bottom-left",
          });
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cart));
        return state;
      });
    },
    incrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      item.quantity++;
      toast.info(`Increased ${action.payload.title} quantity in cart`, {
        position: "bottom-left",
      });
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    decrementQuantity: (state, action) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item.quantity === 1) {
        const nextCartItems = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = nextCartItems;
        toast.error(`${action.payload.title} removed from cart`, {
          position: "bottom-left",
        });
      } else {
        item.quantity--;
        toast.info(`Decreased ${action.payload.title} quantity in cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
    createOrder: (state, action) => {
      state.cart = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cart));
      toast.success("Your order has been sent. Thank you for shopping.", {
        position: "bottom-left",
      });
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
  createOrder,
} = cartSlice.actions;
