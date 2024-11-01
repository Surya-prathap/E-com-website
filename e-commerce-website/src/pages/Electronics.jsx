import { electronics } from "../separate-product-pages/electronics";
import SingleProduct from "../components/SingleProduct";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function ElectronicsPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="productsGrid">
        {electronics.map((device) => {
          return (
            <SingleProduct
              key={device.id}
              image={device.image}
              name={device.name}
              priceCents={device.priceCents}
            />
          );
        })}
      </div>
    </>
  );
}
