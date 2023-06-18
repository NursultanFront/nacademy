import { Dispatch, SetStateAction } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Card } from '../../pages/TheOrder/TheOrder';
import '../../assets/input.scss';

type Props = {
  card: Card;
  setCard: Dispatch<SetStateAction<Card>>;
};

const PaymentForm = ({ card, setCard }: Props) => {
  const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    setCard((prev) => ({ ...prev, focus: evt.target.name }));
  };

  const validateCardName = (value: string) => {
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(value);
  };

  const handleCardNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = evt.target;
    if (validateCardName(value)) {
      setCard((prev) => ({ ...prev, name: value }));
    }
  };

  const validateNumericInput = (value: string) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
  };

  const handleNumericInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    if (validateNumericInput(value)) {
      setCard((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div>
      <Cards number={card.number} expiry={card.expiry} cvc={card.cvc} name={card.name} />
      <form className="input__wrapper">
        <div className="input__item">
          <label htmlFor="number">Номер карты:</label>
          <input
            type="tel"
            id="number"
            name="number"
            placeholder="Card Number"
            value={card.number}
            maxLength={19}
            onChange={handleNumericInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="input__item">
          <label htmlFor="name">Имя карты</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            maxLength={20}
            value={card.name}
            required
            onChange={handleCardNameChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="input__item">
          <label htmlFor="expiry">Дата окончания: </label>
          <input
            type="tel"
            id="expiry"
            name="expiry"
            placeholder="Valid Thru"
            maxLength={4}
            required
            value={card.expiry}
            onChange={handleNumericInputChange}
            onFocus={handleInputFocus}
          />
        </div>
        <div className="input__item">
          <label htmlFor="cvc">CVC:</label>
          <input
            type="tel"
            id="cvc"
            name="cvc"
            placeholder="CVC"
            required
            value={card.cvc}
            maxLength={3}
            onChange={handleNumericInputChange}
            onFocus={handleInputFocus}
          />
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
