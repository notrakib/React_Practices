import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  return (
    <div>
      <h1>Product Detail</h1>
      {params.pID}
    </div>
  );
};

export default ProductDetails;
