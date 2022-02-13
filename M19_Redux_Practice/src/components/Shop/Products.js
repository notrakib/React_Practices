import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          id="1"
          title="Big Herfy"
          price={359}
          description="A juicy, 100% pure beef patty with absolutely no fillers, additives or preservatives, seasoned with secret herbs."
        />
        <ProductItem
          id="2"
          title="Veggie Burger"
          price={259}
          description="A gently spiced mixed vegetable patty topped with creamy mayonnaise, shredded iceberg lettuce in a soft toasted seasame seed bun."
        />
      </ul>
    </section>
  );
};

export default Products;
