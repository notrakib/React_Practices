import { createSlice } from "@reduxjs/toolkit";

const initial = {
  item: [],
  totalPrice: 0,
};

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState: initial,
  reducers: {
    addItem(state, action) {
      const itemIndex = state.item.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex === -1) {
        const newItem = {
          id: action.payload.id,
          title: action.payload.title,
          price: action.payload.price,
          amount: 1,
          total: action.payload.price,
        };

        state.item.push(newItem);
        state.totalPrice += action.payload.price;
        return;
      }

      state.item[itemIndex].amount++;
      state.item[itemIndex].total += action.payload.price;
      state.totalPrice += action.payload.price;
    },
    removeItem(state, action) {
      const itemIndex = state.item.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.item[itemIndex].amount === 1) {
        state.item.splice(itemIndex, 1);
        state.totalPrice -= action.payload.price;
        return;
      }

      state.item[itemIndex].amount--;
      state.item[itemIndex].total -= action.payload.price;
      state.totalPrice -= action.payload.price;
    },
    replaceCart(state, action) {
      state.item = action.payload.item;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const FetchCartData = () => {
  return (dispatch) => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://reduxcart-7f95e-default-rtdb.firebaseio.com/cart.json"
      );
      const data = await response.json();

      if (data === null) {
        return;
      }

      dispatch(CartItemAction.replaceCart(data || {}));
    };
    try {
      fetchdata();
    } catch (error) {
      console.log(error);
    }
  };
};

export const SendCartData = (cart) => {
  return () => {
    const sendData = async () => {
      await fetch(
        "https://reduxcart-7f95e-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PATCH",
          body: JSON.stringify(cart),
        }
      );
    };
    try {
      sendData();
    } catch (error) {
      console.log(error);
    }
  };
};

export const CartItemAction = cartItemSlice.actions;
export default cartItemSlice.reducer;
