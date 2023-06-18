import { useEffect, useState } from 'react';
import CardCredit from '../../components/CreditCard/CreditCard';
import UserInfo from '../../components/UserInfo/UserInfo';
import YandexMap from '../../components/YandexMap/YandexMap';

export type User = {
  firstName: string;
  lastName: string;
};

export type Card = {
  number: string;
  expiry: string;
  cvc: string;
  name: string;
};

const TheOrder = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isDisable, setDisable] = useState<boolean>(true);

  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
  });

  const [card, setCard] = useState<Card>({ number: '', expiry: '', cvc: '', name: '' });

  const nextButton = () => {
    setCurrentStep((prev) => prev + 1);
  };

  const prevButton = () => {
    setCurrentStep((prev) => prev - 1);
  };

  useEffect(() => {
    if (user.firstName.trim() !== '' && user.lastName.trim() !== '') {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [user]);

  useEffect(() => {
    if (
      card.cvc.trim() !== '' &&
      card.expiry.trim() !== '' &&
      card.name.trim() !== '' &&
      card.number.trim() !== '' &&
      card.cvc.length == 3 &&
      card.expiry.length == 4
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [card]);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <UserInfo user={user} setUser={setUser} />;
      case 2:
        return <CardCredit card={card} setCard={setCard} />;
      case 3:
        return <YandexMap />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStepContent()}
      <button onClick={prevButton}>Предыдущий шаг</button>
      <button onClick={nextButton} disabled={isDisable}>
        Следующий шаг
      </button>
    </div>
  );
};

export default TheOrder;
