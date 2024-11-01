import { products } from "../products copy";
import SingleProduct from "./SingleProduct";
export default function Products() {
  return (
    <div className="productsGrid">
      {products.map((product) => {
        return (
          <>
            <SingleProduct
              key={product.id}
              product={product}
              image={product.image}
              name={product.name}
              priceCents={product.priceCents}
            />
          </>
        );
      })}
    </div>
  );
}
