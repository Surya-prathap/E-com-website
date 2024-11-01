import { bags } from "../separate-product-pages/bags";
import SingleProduct from "../components/SingleProduct";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function BagsPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="productsGrid">
        {bags.map((bag) => {
          return (
            <SingleProduct
              key={bag.id}
              image={bag.image}
              name={bag.name}
              priceCents={bag.priceCents}
            />
          );
        })}
      </div>
    </>
  );
}
