import React from "react";
import { Card, Button } from "react-bootstrap";


const ProductItem = ({ name, price, stock, description, onAdd }) => {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body className="d-flex flex-column justify-content-between">

        <div className="mb-3">
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-secondary">{description}</Card.Text>
        </div>

        <div>
          <div className="d-flex justify-content-between">
            <p><strong>${price}</strong></p>
            <p className="text-secondary">Stock: {stock}</p>
          </div>
          <div>
            <Button variant="primary" className="w-100" onClick={onAdd}>
              Add to Cart
            </Button>
          </div>
        </div>

      </Card.Body>
    </Card>
  );
};

export default ProductItem;
