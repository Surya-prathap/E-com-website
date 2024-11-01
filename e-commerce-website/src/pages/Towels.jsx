import { towels } from "../separate-product-pages/towels";
import SingleProduct from "../components/SingleProduct";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function TowelsPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="productsGrid">
        {towels.map((towel) => {
          return (
            <SingleProduct
              key={towel.id}
              image={towel.image}
              name={towel.name}
              priceCents={towel.priceCents}
            />
          );
        })}
      </div>
    </>
  );
}
