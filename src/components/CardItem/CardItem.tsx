import { useAppDispatch } from '../../redux-hooks/redux-hooks';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Product } from '../../api/product/types';
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

type Props = {
  card: Product;
};

const CardItem = ({ card }: Props) => {
  const [quantity, setQuantity] = useState(0);

  const dispatch = useAppDispatch();

  const addProduct = (value: Product) => {
    setQuantity((num) => num + 1);
    dispatch(addToCart(value));
  };

  const removeProduct = (value: Product) => {
    setQuantity((num) => num - 1);
    dispatch(removeFromCart(value));
  };

  return (
    <Grid item xs={12} sm={4} md={4}>
      <Item>
        <img src={card.images[0]} width="100%" height={300} alt="image" />
        <div>{card.title}</div>
        <div>{card.price}</div>
        {quantity >= 1 ? (
          <div>
            <div>
              <button onClick={() => removeProduct(card)}>-</button>
              <p>{quantity && quantity}</p>
              <button onClick={() => addProduct(card)}>+</button>
            </div>
          </div>
        ) : (
          <button onClick={() => addProduct(card)}>Add to the Cart</button>
        )}
      </Item>
    </Grid>
  );
};

export default CardItem;
