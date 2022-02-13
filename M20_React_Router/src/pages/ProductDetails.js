import { Fragment } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const param = useParams();
  return (
    <Fragment>
      <h2>Product Detail Page</h2>
      <p>{param.productId}</p>
    </Fragment>
  );
};

export default ProductDetails;
