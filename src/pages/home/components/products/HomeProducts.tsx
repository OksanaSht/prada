import { useQuery } from "@tanstack/react-query";
import styles from "./styles.module.scss";
import { ProductCard, productsApi } from "@/entities/product";

export const HomeProducts = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: productsApi.getProducts,
  });

  return (
    <div className={styles.wrapper}>
      {data?.products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
