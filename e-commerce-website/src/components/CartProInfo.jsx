export default function CartProInfo({ cartProName, cartProPrice }) {
  return (
    <>
      <p className="cartPro-name">{cartProName}</p>
      <p className="cartPro-price">Rs.{cartProPrice}</p>
    </>
  );
}
