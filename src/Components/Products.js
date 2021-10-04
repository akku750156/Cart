import React from "react";

function Products(props) {
  const { products } = props;
  return (
    <React.Fragment>
      {products.map((product) => (
        <div key={product.length} className="individual__product">
          <div className="product__name">{product.productName}</div>
          <div className="product__price">{product.productPrice}</div>
          <button>Add to Cart</button>
        </div>
      ))}
    </React.Fragment>
  );
}

export default Products;
