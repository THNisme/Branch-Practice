import React, { useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductList from "./ProductList";
import Cart from "./Cart";

const productData = [
  { id: "p1", name: "Wireless Headphones", price: 59.99, stock: 5, description: "Comfortable wireless headphones with long battery life.", discountRate: 0.2 },
  { id: "p2", name: "Mechanical Keyboard", price: 89.0, stock: 3, description: "Tactile mechanical keyboard with RGB.", discountRate: 0.5 },
  { id: "p3", name: "USB-C Charger", price: 19.5, stock: 10, description: "Fast charging 65W USB-C charger.", discountRate: 0.3 },
  { id: "p4", name: "Gaming Mouse", price: 39.99, stock: 2, description: "High-precision optical sensor gaming mouse.", discountRate: 0.4 }
];

// Reducer quản lý giỏ hàng
const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const product = action.payload;
    const existingItem = state.items.find(item => item.id === product.id);

    if (existingItem) {
      if (existingItem.quantity >= product.stock) {
        return { ...state, error: `Cannot add more than stock (${product.stock}).` };
      }

      const updatedItems = state.items.map(item => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });

      return { ...state, items: updatedItems, error: "" };
    }

    const newItem = { ...product, quantity: 1 };
    return { ...state, items: [...state.items, newItem], error: "" };
  }

  if (action.type === "INCREASE_QTY") {
    const updatedItems = state.items.map(item => {
      if (item.id === action.payload.id) {
        if (item.quantity >= item.stock) {
          return item;
        }
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    const item = state.items.find(i => i.id === action.payload.id);
    if (item && item.quantity >= item.stock) {
      return { ...state, items: updatedItems, error: `Cannot add more than stock (${item.stock}).` };
    }

    return { ...state, items: updatedItems, error: "" };
  }

  if (action.type === "DECREASE_QTY") {
    const updatedItems = state.items.map(item => {
      if (item.id === action.payload.id) {
        const newQuantity = item.quantity - 1;
        if (newQuantity < 1) return { ...item, quantity: 1 };
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    return { ...state, items: updatedItems, error: "" };
  }

  if (action.type === "REMOVE_ITEM") {
    const updatedItems = state.items.filter(item => item.id !== action.payload.id);
    return { ...state, items: updatedItems, error: "" };
  }

  if (action.type === "CLEAR_CART") {
    return { items: [], error: "" };
  }

  return state;
};

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, { items: [], error: "" });

  const addToCart = (product) => dispatch({ type: "ADD_ITEM", payload: product });
  const increaseQty = (id) => dispatch({ type: "INCREASE_QTY", payload: { id } });
  const decreaseQty = (id) => dispatch({ type: "DECREASE_QTY", payload: { id } });
  const removeItem = (id) => dispatch({ type: "REMOVE_ITEM", payload: { id } });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const discountTotalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity * i.discountRate, 0);
  const afterTotalPrice = totalPrice - discountTotalPrice;

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">React Shopping Cart with Hooks</h2>

      <div className="row">
        <div className="col-md-8">
          <ProductList products={productData} onAdd={addToCart} />
        </div>
        <div className="col-md-4">
          <Cart
            cart={state.items}
            error={state.error}
            onIncrease={increaseQty}
            onDecrease={decreaseQty}
            onRemove={removeItem}
            onClear={clearCart}
            totalPrice={totalPrice}
            totalItems={totalItems}
            afterTotalPrice={afterTotalPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
