import { womenProducts } from "../separate-product-pages/womens-products";
import SingleProduct from "../components/SingleProduct";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function WomenPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="productsGrid">
        {womenProducts.map((product) => {
          return (
            <SingleProduct
              key={product.id}
              image={product.image}
              name={product.name}
              priceCents={product.priceCents}
            />
          );
        })}
      </div>
    </>
  );
}
