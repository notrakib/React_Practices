import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <h2>The Product Page</h2>
      <Link to={"/product/a"}>A</Link>
      <Link to={"/product/b"}>B</Link>
      <Link to={"/product/c"}>C</Link>
    </div>
  );
};

export default Product;
