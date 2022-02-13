import { uiAction } from "./ui-slice";
import { cartAction } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-cart-94dbe-default-rtdb.firebaseio.com/redux_cart.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const cartData = await response.json();
      dispatch(
        cartAction.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
          totalPrice: cartData.totalPrice,
        })
      );
    };
    try {
      await fetchData();
    } catch (error) {
      dispatch(
        uiAction.setNotification({
          status: "error",
          title: "Error!",
          message: "Fetching cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (items) => {
  return async (dispatch) => {
    dispatch(
      uiAction.setNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-cart-94dbe-default-rtdb.firebaseio.com/redux_cart.json",
        {
          method: "PUT",
          body: JSON.stringify(items),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
    };
    try {
      await sendRequest();

      dispatch(
        uiAction.setNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        uiAction.setNotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
