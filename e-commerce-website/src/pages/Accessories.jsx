import { accessories } from "../separate-product-pages/accessories";
import SingleProduct from "../components/SingleProduct";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useCart } from "../components/CartContext";

export default function AccessoriesPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="productsGrid">
        {accessories.map((eachItem) => {
          return (
            <SingleProduct
              key={eachItem.id}
              image={eachItem.image}
              name={eachItem.name}
              priceCents={eachItem.priceCents}
            />
          );
        })}
      </div>
    </>
  );
}
