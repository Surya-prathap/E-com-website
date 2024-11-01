import QuantityControl from "./QuantityControl";
import DisplayQuantity from "./DisplayQuantity";
import CartProInfo from "./CartProInfo";

export default function InfoAndQuantity() {
  return (
    <div className="cartPro-info">
      <CartProInfo />
      <div className="quantityDiv">
        <QuantityControl />
        <DisplayQuantity />
      </div>
    </div>
  );
}
