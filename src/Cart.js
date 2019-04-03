import React from "react";
import Product from "./Product.js";
import ProductData from "./Data.js";
import Receipt from "./Receipt.js";
import "./styles/cart.css";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        {
          productName: "Apple",
          price: 1,
          count: 2
        },
        {
          productName: "Orange",
          price: 1,
          count: 1
        }
      ]
    };
  }

  function handleAddToCart(props, nameInput, priceInput) {
  let copy = [...this.state.cartItems];
  this.copy.forEach(item => {
    if (item.productName === nameInput) {
      item.count += 1;
      this.setState({ cartItems: copy });
    } else {
      this.setState({
        cartItems: this.state.cartItems.concat({
          productName: nameInput,
          price: priceInput,
          count: 0
        })
      });
    }
  });
}

  render() {
    return (
      <div className="page-content">
        {ProductData.products.map(product => (
          <Product
            onAddToCart={handleAddToCart}
            productName={product.name}
            price={product.cost}
            // limit={product.stock}
          />
        ))}
        {<Receipt />}
      </div>
    );
  }
}

export default Cart;
