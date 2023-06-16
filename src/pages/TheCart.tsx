import { useAppDispatch, useAppSelector } from '../redux-hooks/redux-hooks';
import { clearCart } from '../store/cartSlice';

const TheCart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((store) => store.cart);

  return (
    <div>
      <ul>
        <button
          onClick={() => {
            dispatch(clearCart());
          }}
        >
          Clear
        </button>
        {cart.map((item) => {
          return (
            <li key={item.product.id}>
              <div>{item.product.title}</div>
              <img src={item.product.thumbnail} alt="" />
              <div>{item.product.price}</div>
              <p>currently - {item.quantity}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TheCart;
