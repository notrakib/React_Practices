import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/product-context";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";

const Products = (props) => {
  const productCtx = useContext(ProductContext);
  console.log(productCtx.products)
  return (
    <ul className="products-list">
      {productCtx.products.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
