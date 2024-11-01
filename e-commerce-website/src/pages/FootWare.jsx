import { footWare } from "../separate-product-pages/foot-ware";
import SingleProduct from "../components/SingleProduct";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function FootWarePage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="productsGrid">
        {footWare.map((eachItem) => {
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
