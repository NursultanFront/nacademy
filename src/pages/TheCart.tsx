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
            <li key={item.id}>
              <div>{item.title}</div>
              <img src={item.thumbnail} alt="" />
              <div>{item.price}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TheCart;
