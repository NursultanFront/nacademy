import React, { Dispatch, SetStateAction, useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import { Card } from '../../pages/TheOrder/TheOrder';

type Props = {
  card: Card;
  setCard: Dispatch<SetStateAction<Card>>;
};

// const PaymentForm = ({ card, setCard }: Props) => {
//   const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = evt.target;
//     setCard((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
//     setCard((prev) => ({ ...prev, focus: evt.target.name }));
//   };

//   return (
//     <div>
//       <Cards number={card.number} expiry={card.expiry} cvc={card.cvc} name={card.name} />
//       <form>
//         <input
//           type="tel"
//           name="number"
//           placeholder="Card Number"
//           value={card.number}
//           maxLength={19}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//         />
//         <input
//           type="text"
//           name="name"
//           placeholder="Name"
//           maxLength={20}
//           value={card.name}
//           required
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//         />

//         <input
//           type="tel"
//           name="expiry"
//           placeholder="Valid Thru"
//           maxLength={4}
//           required
//           value={card.expiry}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//         />

//         <input
//           type="tel"
//           name="cvc"
//           placeholder="CVC"
//           required
//           value={card.cvc}
//           maxLength={3}
//           onChange={handleInputChange}
//           onFocus={handleInputFocus}
//         />
//       </form>
//     </div>
//   );
// };

// export default PaymentForm;

const PaymentForm = ({ card, setCard }: Props) => {
  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setCard((prev) => ({ ...prev, [name]: value }));
  };

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
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={card.number}
          maxLength={19}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          maxLength={20}
          value={card.name}
          required
          onChange={handleCardNameChange} // Обработчик изменения названия карты
          onFocus={handleInputFocus}
        />

        <input
          type="tel"
          name="expiry"
          placeholder="Valid Thru"
          maxLength={4}
          required
          value={card.expiry}
          onChange={handleNumericInputChange}
          onFocus={handleInputFocus}
        />

        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          required
          value={card.cvc}
          maxLength={3}
          onChange={handleNumericInputChange}
          onFocus={handleInputFocus}
        />
      </form>
    </div>
  );
};

export default PaymentForm;
