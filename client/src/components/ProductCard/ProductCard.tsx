import { Product } from '../../interfaces';
import AddToCart from '../AddToCart/AddToCart';

type Props = {
  item: Product;
  i: number;
};

const ProductCard = ({ item, i }: Props) => {
  return (
    <div className="product-item" key={i}>
      <div className="product__img"></div>
      <section className="product__text">
        <h4>{item.title}</h4>
        <span className="product__price">€{item.price}.-</span>
        <AddToCart />
      </section>
    </div>
  );
};

export default ProductCard;
