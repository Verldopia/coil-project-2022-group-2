import Button from '@mui/material/Button';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';
import { CartItemType } from '../../pages/LandingPage';
import { Wrapper } from './item.styles';
import styles from './Item.module.css';

type Props = {
    item: CartItemType;
    handleAddCart: (clickedItem: CartItemType) => void;
};

const Item: React.FC<Props> = ({ item, handleAddCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h2>{item.title}</h2>
            <h4>€{item.price}</h4>
        </div>
        <Button className={styles.cartBtn} onClick={() => handleAddCart(item)} variant="text" startIcon={<ShoppingCartOutlined />}>
            Add to Cart
        </Button>
    </Wrapper>
);

export default Item;
