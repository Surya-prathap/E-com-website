import { useCart } from "./CartContext";
export default function SingleProduct({ product, image, name, priceCents }) {
  const { addToCart, cartItems } = useCart();
  return (
    <div className="productContainer">
      <div className="onlyImage">
        <div className="imgContainer">
          <img className="image" src={image} />
        </div>
      </div>

      <div className="single-pro-name">{name}</div>
      <div className="single-pro-price">Rs.{priceCents}</div>
      <button className="cartButton" onClick={() => addToCart(product)}>
        Cart
      </button>
    </div>
  );
}
