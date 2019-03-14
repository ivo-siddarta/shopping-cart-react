import React from "react";
import Product from "./Product.js";
import ProductData from "./Data.js";
import "./styles/cart.css";

class Cart extends React.Component {
  render() {
    return (
      <div className="page-content">
        {ProductData.products.map(product => (
          <Product
            productName={product.name}
            price={product.cost}
            limit={product.stock}
          />
        ))}
      </div>
    );
  }
}

export default Cart;
