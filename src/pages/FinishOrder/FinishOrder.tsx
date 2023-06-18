import { useAppSelector } from '../../redux-hooks/redux-hooks';
import { Aderss, Card, User } from '../TheOrder/TheOrder';
import { useLocation } from 'react-router-dom';

type Props = {
  user: User;
  card: Card;
  adress: Aderss;
};

const FinishOrder = () => {
  const location = useLocation();
  const { adress, card, user } = location.state as Props;
  const { totalPrice } = useAppSelector((store) => store.cart);

  console.log(adress);

  return (
    <>
      <div>
        <h2>Ваш профиль </h2>
        <div>
          <p>Ваше Имя : {user.firstName}</p>

          <p>Ваша Фамилия : {user.lastName}</p>
        </div>
      </div>

      <div>
        <h2>Ваша карточка</h2>

        <div>
          <p>Имя : {card.name}</p>
          <p>Номер карточки : {card.number}</p>
        </div>
      </div>

      <div>
        <h2>Ваша локация</h2>
        <div>
          <p>Ваш город : {adress.city}</p>
          <p>Ваша улица : {adress.street}</p>
          <p>Ваш номер дома : {adress.city}</p>
        </div>
      </div>

      <div> Итого: {totalPrice}</div>
    </>
  );
};

export default FinishOrder;
