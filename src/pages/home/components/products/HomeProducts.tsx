import { useQuery } from "@tanstack/react-query";
import styles from "./styles.module.scss";
import { ProductCard, productsApi } from "@/entities/product";
import { Product } from "@/entities/product";
import clsx from "clsx";

interface ProductsData {
  products: Product[];
}

export const HomeProducts = () => {
  const { data } = useQuery<ProductsData>({
    queryKey: ["products"],
    queryFn: productsApi.getProducts,
  });

  return (
    <div className={clsx("container", styles.productCards)}>
      {data?.products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
