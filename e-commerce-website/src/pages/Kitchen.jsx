import { kitchenProducts } from "../separate-product-pages/kitchen-products";
import SingleProduct from "../components/SingleProduct";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
export default function KitchenPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="productsGrid">
        {kitchenProducts.map((kitchenProduct) => {
          return (
            <SingleProduct
              key={kitchenProduct.id}
              image={kitchenProduct.image}
              name={kitchenProduct.name}
              priceCents={kitchenProduct.priceCents}
            />
          );
        })}
      </div>
    </>
  );
}
