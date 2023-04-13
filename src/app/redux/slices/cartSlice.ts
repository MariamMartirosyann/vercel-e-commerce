import { createSlice } from "@reduxjs/toolkit";
import { ICartState, IState } from "../interface";

const name = "cart";

const initialState: ICartState = {
  cartItems: [],
};
const cartSlice = createSlice({
  initialState,
  name,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].itemQuantity += 1;
      } else {
        const newItem = { ...action.payload, itemQuantity: 1 };
        state.cartItems.push(newItem);
      }
    },

    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItems = nextCartItems;
    },

    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[itemIndex].itemQuantity > 1) {
        state.cartItems[itemIndex].itemQuantity -= 1;
      } else if (state.cartItems[itemIndex].itemQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        );
        state.cartItems = nextCartItems;
      }
    },

    clearCart(state) {
      state.cartItems = [];
    }
    }
    });


    

    export const { addToCart, removeFromCart, decreaseCart, clearCart} = cartSlice.actions;

    export const selectCartItems = (state: IState) => state.cart.cartItems;


export default cartSlice.reducer;