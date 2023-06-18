import { useAppSelector } from '../../redux-hooks/redux-hooks';
import { Aderss, Card, User } from '../TheOrder/TheOrder';
import { useLocation } from 'react-router-dom';
import './FinishOrder.scss';

type Props = {
  user: User;
  card: Card;
  adress: Aderss;
};

const FinishOrder = () => {
  const location = useLocation();
  const { adress, card, user } = location.state as Props;
  const { totalPrice } = useAppSelector((store) => store.cart);

  return (
    <div className="finish">
      <div className="finish__item">
        <h2>Ваш профиль </h2>
        <div>
          <p>Ваше Имя : {user.firstName}</p>

          <p>Ваша Фамилия : {user.lastName}</p>
        </div>
      </div>

      <div className="finish__item">
        <h2>Ваша карточка</h2>

        <div>
          <p>Имя : {card.name}</p>
          <p>Номер карточки : {card.number}</p>
        </div>
      </div>

      <div className="finish__item">
        <h2>Ваша локация</h2>
        <div>
          <p>Ваш город : {adress.city}</p>
          <p>Ваша улица : {adress.street}</p>
          <p>Ваш номер дома : {adress.home}</p>
        </div>
      </div>

      <div className="finish__item"> Итого: {totalPrice}</div>
    </div>
  );
};

export default FinishOrder;
