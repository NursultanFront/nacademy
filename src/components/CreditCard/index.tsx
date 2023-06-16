import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
const PaymentForm = () => {
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
  });

  const handleInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt: React.FocusEvent<HTMLInputElement>) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div>
      <Cards number={state.number} expiry={state.expiry} cvc={state.cvc} name={state.name} />
      <form>
        <input
          type="tel"
          name="number"
          placeholder="Card Number"
          value={state.number}
          pattern="[\d| ]{16,22}"
          maxLength={19}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        <input
          type="text"
          name="name"
          placeholder="Name"
          pattern="[a-z A-Z-]+"
          maxLength={20}
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />

        <input
          type="tel"
          name="expiry"
          placeholder="Valid Thru"
          pattern="\d\d/\d\d"
          maxLength={4}
          required
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />

        <input
          type="tel"
          name="cvc"
          placeholder="CVC"
          pattern="\d{3}"
          required
          maxLength={3}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
      </form>
    </div>
  );
};

export default PaymentForm;
