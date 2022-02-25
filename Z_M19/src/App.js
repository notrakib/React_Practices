import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { SendCartData, FetchCartData } from "./components/store/CartItemSlice";

let initial = true;

function App() {
  const showCart = useSelector((state) => state.cartShow.value);
  const cart = useSelector((state) => state.cartItem);

  const dispatch = useDispatch();

  useEffect(() => {
    if (initial) {
      dispatch(FetchCartData());
      initial = false;
      return;
    }
    dispatch(SendCartData(cart));
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
