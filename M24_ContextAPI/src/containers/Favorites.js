import React from "react";
import { useContext } from "react";
import { ProductContext } from "../context/product-context";

import FavoriteItem from "../components/Favorites/FavoriteItem";
import "./Products.css";

const Favorites = (props) => {
  const productCtx = useContext(ProductContext);
  const productFiltered = productCtx.products.filter((p) => p.isFavorite);
  let content = <p className="placeholder">Got no favorites yet!</p>;
  if (productFiltered.length > 0) {
    content = (
      <ul className="products-list">
        {productFiltered.map((prod) => (
          <FavoriteItem
            key={prod.id}
            id={prod.id}
            title={prod.title}
            description={prod.description}
          />
        ))}
      </ul>
    );
  }
  return content;
};

export default Favorites;
