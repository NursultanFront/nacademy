import { Product } from '../../api/product/types';
import { useAppDispatch, useAppSelector } from '../../redux-hooks/redux-hooks';
import { addToCart, removeFromCart } from '../../store/cartSlice';
import { clearCart } from '../../store/cartSlice';
import './Cart.scss';

const TheCart = () => {
  const dispatch = useAppDispatch();
  const { cart, totalPrice } = useAppSelector((store) => store.cart);

  const addProduct = (value: Product) => {
    dispatch(addToCart(value));
  };

  const removeProduct = (value: Product) => {
    dispatch(removeFromCart(value));
  };

  return (
    <div>
      <div className="cart-page__title">
        <h2>Корзина</h2>
        <button
          onClick={() => {
            dispatch(clearCart());
          }}
          disabled={cart.length == 0}
        >
          Очистить
        </button>
      </div>
      <div className="cart__wrapper">
        {cart.length >= 1 ? (
          <ul className="cart__shop">
            {cart.map((item) => {
              return (
                <li className="cart__item" key={item.product.id}>
                  <img
                    className="cart__img"
                    src={item.product.thumbnail}
                    width={50}
                    height={50}
                    alt="Продукт"
                  />
                  <div className="cart__title">Название: {item.product.title}</div>
                  <div className="cart__price">Цена: {item.product.price}</div>
                  <div className="cart__btn">
                    <button onClick={() => removeProduct(item.product)}>-</button>
                    <p>{item.quantity}</p>
                    <button onClick={() => addProduct(item.product)}>+</button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
          <h2>Здесь ничего нет, пожалуйста добавьте товары</h2>
        )}
        {cart.length >= 1 && (
          <div className="cart__summary">
            <div>
              <h2>Итого</h2>
              <p>Общая цена: {totalPrice}</p>
            </div>
            <button>Оплата</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TheCart;
