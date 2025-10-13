import React from "react";
import { Button } from "react-bootstrap";

const CartItem = ({ name, price, quantity, stock, onIncrease, onDecrease, onRemove }) => {
  const subtotal = price * quantity;

  return (
    <div className="border-bottom pb-2 mb-2">
      <div className="d-flex justify-content-between align-items-start">
        <div>
          <strong>{name}</strong>
          <div>${price.toFixed(2)} each</div>
          <div className="d-flex align-items-center mt-1">
            <Button size="sm" variant="outline-secondary" onClick={onDecrease}>−</Button>
            <span className="mx-2">{quantity}</span>
            <Button size="sm" variant="outline-secondary" onClick={onIncrease}>+</Button>
            <small className="ms-2 text-muted">Stock: {stock}</small>
          </div>
        </div>

        <div className="text-end">
          <div className="text-muted small">Subtotal</div>
          <div className="fw-bold">${subtotal.toFixed(2)}</div>
          <button className="btn btn-link text-danger p-0 mt-1" onClick={onRemove}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartItem;