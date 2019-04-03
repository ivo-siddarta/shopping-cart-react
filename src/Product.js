import React from "react";

const Product = props => {
  // let counter = 0;
  // function addToCart(e) {
  //   counter += 1;
  //   if (counter > props.limit) {
  //     alert("This item is out of stock!");
  //   } else {
  //     alert(
  //       "There are " + counter + " " + props.productName + "s in your cart!"
  //     );
  //   }
  // }
  return (
    <div class="ui cards">
      <div class="card">
        <div class="content">
          <div class="header">{props.productName}</div>
          <div class="description" />
          Price: ${props.price}
        </div>
        <div
          class="ui bottom attached button"
          onClick={() => {
            props.onAddToCart(props.productName, props.price);
          }}
        >
          <i class="add icon" />
          Add to Cart
        </div>
      </div>
    </div>
  );
};

export default Product;
