import { useCart } from "./CartContext";

export default function RemoveButton() {
  const { cartItem, removeFromCart } = useCart();
  return (
    <div className="btnContainer">
      <button className="removeBtn" onClick={() => removeFromCart(cartItem)}>
        Remove
      </button>
    </div>
  );
}
