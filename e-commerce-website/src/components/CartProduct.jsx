import { useCart } from "./CartContext";
import CartProInfo from "./CartProInfo";
import CartProImage from "./CartProImage";
import RemoveButton from "./RemoveButton";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import QuantityControl from "./QuantityControl";

export default function CartProduct() {
  const { cartItems, addToCart } = useCart();

  return (
    <div>
      {cartItems.map((item) => {
        return (
          <>
            <Navbar />
            <Sidebar />
            <div className="cartPro-container">
              <CartProImage cartProImage={item.image} />

              <div className="cartPro-info">
                <CartProInfo
                  key={item.id}
                  cartProName={item.name}
                  cartProPrice={item.priceCents}
                />
              </div>
              <div className="quantity-details">
                <QuantityControl />
              </div>

              <RemoveButton />
            </div>
          </>
        );
      })}
    </div>
  );
}
