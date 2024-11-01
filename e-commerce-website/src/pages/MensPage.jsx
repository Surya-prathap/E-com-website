import { mensProducts } from "../separate-product-pages/mens-products";
import SingleProduct from "../components/SingleProduct";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function MensPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="productsGrid">
        {mensProducts.map((mensProduct) => {
          return (
            <SingleProduct
              key={mensProduct.id}
              image={mensProduct.image}
              name={mensProduct.name}
              priceCents={mensProduct.priceCents}
            />
          );
        })}
      </div>
    </>
  );
}
