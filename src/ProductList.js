import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onAdd }) => {
  return (
    <div className="row">
      <h3>Products</h3>
      {products.map(product => (
        <div className="col-md-6 mb-3" key={product.id}>
          <ProductItem
            id={product.id}
            name={product.name}
            price={product.price}
            stock={product.stock}
            description={product.description}
            onAdd={() => onAdd(product)}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
