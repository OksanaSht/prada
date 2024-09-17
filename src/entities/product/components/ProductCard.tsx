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
    <div className={styles.product_card}>
      {product.images && (
        <div className={styles.product_card__image}>
          <img src={product.images} alt={product.title} />
        </div>
      )}
      <div className={styles.product_card__text}>
        <h2 className={styles.product_card__info}>{product.title}</h2>

        <div className={styles.productBlock_rate_brand}>
          {product.rating && <p>Rating: {product.rating}</p>}
          {product.brand && <p>Brand: {product.brand}</p>}
        </div>
        <p className={styles.product_card__info}>Price: ${product.price}</p>
      </div>
    </div>
  );
};
