import { Aderss, Card, User } from '../../pages/TheOrder/TheOrder';

type Props = {
  user: User;
  card: Card;
  address: Aderss;
};

const FinishOrder = ({ address, card, user }: Props) => {
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
          <p>Ваш город : {address.city}</p>
          <p>Ваша улица : {address.street}</p>
          <p>Ваш номер дома : {address.city}</p>
        </div>
      </div>
    </>
  );
};

export default FinishOrder;
