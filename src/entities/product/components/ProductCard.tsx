import styles from "./styles.module.scss";

export interface Product {
  id: number;
  title: string;
  description?: string;
  price: number;
  images?: string;
  rating?: number;
  brand?: string;
  // Add other properties as needed
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.productCard}>
      {product.images && (
        <div className={styles.productCard__image}>
          <img src={product.images} alt={product.title} />
        </div>
      )}
      <div className={styles.productCard__text}>
        <h2 className={styles.productCard__info}>{product.title}</h2>

        <div className={styles.productCard_rateBrand}>
          {product.rating && <p>Rating: {product.rating}</p>}
          {product.brand && <p>Brand: {product.brand}</p>}
        </div>
        <p className={styles.productCard__info}>Price: ${product.price}</p>
      </div>
    </div>
  );
};
