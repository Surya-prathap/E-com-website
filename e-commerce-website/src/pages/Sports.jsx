import { sportsProducts } from "../separate-product-pages/sports-products";
import SingleProduct from "../components/SingleProduct";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function SportsPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="productsGrid">
        {sportsProducts.map((sportsProduct) => {
          return (
            <SingleProduct
              key={sportsProduct.id}
              image={sportsProduct.image}
              name={sportsProduct.name}
              priceCents={sportsProduct.priceCents}
            />
          );
        })}
      </div>
    </>
  );
}
