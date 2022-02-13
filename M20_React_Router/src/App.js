import Welcome from "./pages/welcome";
import Products from "./pages/products";
import { Route, Switch, Redirect } from "react-router-dom";
import { Fragment } from "react";
import MainHeader from "./components/ManiHeader";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Fragment>
      <MainHeader />
      <Switch>
        <Route path="/" exact>
          <Redirect to="/welcome"></Redirect>
        </Route>
        <Route path="/welcome">
          <Welcome></Welcome>
        </Route>
        <Route path="/products" exact>
          <Products></Products>
        </Route>
        <Route path="/products/:productId">
          <ProductDetails></ProductDetails>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
