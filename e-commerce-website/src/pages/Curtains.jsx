import { curtains } from "../separate-product-pages/curtains";
import SingleProduct from "../components/SingleProduct";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function CurtainsPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="productsGrid">
        {curtains.map((curtain) => {
          return (
            <SingleProduct
              key={curtain.id}
              image={curtain.image}
              name={curtain.name}
              priceCents={curtain.priceCents}
            />
          );
        })}
      </div>
    </>
  );
}
