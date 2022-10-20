import { Product } from '../../interfaces';
import AddToCart from '../AddToCart/AddToCart';
import styles from './ProductCard.module.css';

type Props = {
  item: Product;
  i: number;
};

const ProductCard = ({ item, i }: Props) => {
  return (
    <div className={styles.productItem} key={i}>
      <img
        alt={item.title}
        className={styles.product__img}
        style={{ backgroundImage: 'var(--logo)' }}
      ></img>
      <section className={styles.product__text}>
        <h4>{item.title}</h4>
        <span className={styles.product__price}>€{item.price}.-</span>
        <AddToCart />
      </section>
    </div>
  );
};

export default ProductCard;
