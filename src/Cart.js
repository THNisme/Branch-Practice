import React from "react";
import CartItem from "./CartItem";
import { Button, Alert } from "react-bootstrap";

const Cart = ({ cart, error, onIncrease, onDecrease, onRemove, onClear, totalPrice, totalItems }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Cart</h5>
        <h6 className="text-end mb-3">
          Cart Total: ${totalPrice.toFixed(2)} ({totalItems} items)
        </h6>

        {error && (
          <Alert variant="warning" className="py-2">
            {error}
          </Alert>
        )}

        <div style={{ maxHeight: "250px", overflowY: "auto" }}>
          {cart.length === 0 && (
            <div className="alert alert-info py-2">Giỏ hàng đang trống</div>
          )}

          {cart.map(item => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
              stock={item.stock}
              onIncrease={() => onIncrease(item.id)}
              onDecrease={() => onDecrease(item.id)}
              onRemove={() => onRemove(item.id)}
            />
          ))}
        </div>

        {cart.length > 0 && (
          <div className="d-flex justify-content-between mt-3">
            <Button variant="outline-danger" onClick={onClear}>
              Clear Cart
            </Button>
            <Button variant="success">
              Checkout (${totalPrice.toFixed(2)})
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
