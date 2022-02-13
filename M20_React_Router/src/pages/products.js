import { Fragment } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <Fragment>
      <h1>Products Page</h1>
      <p>
        <Link to="/products/p1"> A book</Link>
      </p>
      <p>
        <Link to="/products/p2"> A car</Link>
      </p>
      <p>
        <Link to="/products/p3"> A umbrella</Link>
      </p>
    </Fragment>
  );
};
export default Products;
