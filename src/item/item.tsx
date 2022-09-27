import Button from '@mui/material/Button';
import { CartItemType } from '../App';
import { Wrapper } from './item.styles';

type Props = {
  item: CartItemType;
  handleAddCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddCart }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <h3>{item.price}</h3>
    </div>
    <Button onClick={() => handleAddCart(item)}>Add to cart</Button>
  </Wrapper>
);

export default Item;
