import { Redirect, Route, Switch } from "react-router-dom";
import Product from "./pages/product";
import Welcome from "./pages/welcome";
import MainHeader from "./components/mainHeader";
import ProductDetails from "./pages/productDetails";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <MainHeader></MainHeader>
      <Switch>
        <Route path={"/"} exact>
          <Redirect to={"/welcome"}></Redirect>
        </Route>
        <Route path={"/welcome"}>
          <Welcome></Welcome>
        </Route>
        <Route path={"/product"} exact>
          <Product></Product>
        </Route>
        <Route path={"/product/:pID"}>
          <ProductDetails></ProductDetails>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
