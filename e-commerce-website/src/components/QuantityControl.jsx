import { useState } from "react";
import DisplayQuantity from "./DisplayQuantity";
export default function QuantityControl() {
  const [quantity, setQuantity] = useState(0);

  function increaseQuantity() {
    setQuantity(quantity + 1);
  }

  function decreaseQuantity() {
    setQuantity(quantity - 1);
  }
  return (
    <div className="quantityControl">
      <button onClick={decreaseQuantity}>-</button>
      <span className="quantity">{quantity}</span>
      <button onClick={increaseQuantity}>+</button>
      <DisplayQuantity quantity={quantity} />
    </div>
  );
}
