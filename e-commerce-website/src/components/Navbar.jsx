import { Link } from "react-router-dom";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cartItems } = useCart();
  return (
    <div className="navbar">
      <span className="headings">
        <Link to="/" className="noUnderline">
          <p>Home</p>
        </Link>
        <Link to="/shop" className="noUnderline">
          <p>Shop Now</p>
        </Link>
        <Link to="/cart" className="noUnderline">
          <p>
            Cart <span>{cartItems.length}</span>
          </p>
        </Link>

        <p>Logout</p>
      </span>
    </div>
  );
}
