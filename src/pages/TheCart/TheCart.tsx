import { Product } from '../../api/product/types';
import { useAppDispatch, useAppSelector } from '../../redux-hooks/redux-hooks';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import { clearCart } from '../../store/cartSlice';
import './Cart.scss';

const TheCart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((store) => store.cart);

  const addProduct = (value: Product) => {
    dispatch(addToCart(value));
  };

  const removeProduct = (value: Product) => {
    dispatch(removeFromCart(value));
  };

  return (
    <div>
      <div className="cart-page__title">
        <h2>Shopping Cart</h2>
        <button
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear
        </button>
      </div>
      <ul>
        {cart.map((item) => {
          return (
            <li className="cart__item" key={item.product.id}>
              <div>{item.product.title}</div>
              <img src={item.product.thumbnail} width={50} height={50} alt="" />
              <div>{item.product.price}</div>
              <button onClick={() => removeProduct(item.product)}>-</button>
              <p>{item.quantity}</p>
              <button onClick={() => addProduct(item.product)}>+</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TheCart;
