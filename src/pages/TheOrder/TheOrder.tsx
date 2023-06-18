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

export type Aderss = {
  city: string;
  street: string;
  home: string;
};

const stepComponents = [UserInfo, CardCredit, YandexMap];

const TheOrder = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isDisable, setDisable] = useState<boolean>(true);

  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
  });

  const [card, setCard] = useState<Card>({ number: '', expiry: '', cvc: '', name: '' });

  const [adress, setAdress] = useState({
    city: '',
    street: '',
    home: '',
  });

  const nextButton = () => {
    setCurrentStep((prev) => prev + 1);
    if (!isDisable) {
      setDisable(true);
    }
  };

  const prevButton = () => {
    setCurrentStep((prev) => prev - 1);
  };

  useEffect(() => {
    if (user.firstName.trim() !== '' && user.lastName.trim() !== '') {
      setDisable(false);
    }
  }, [user]);

  useEffect(() => {
    if (
      card.cvc.trim() !== '' &&
      card.expiry.trim() !== '' &&
      card.name.trim() !== '' &&
      card.number.trim() !== '' &&
      card.cvc.length == 3 &&
      card.expiry.length == 4 &&
      card.number.length >= 16
    ) {
      setDisable(false);
    }
  }, [card]);

  useEffect(() => {
    if (adress.city.trim() !== '' && adress.home.trim() !== '' && adress.street.trim() !== '') {
      setDisable(false);
    }
  }, [adress]);

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <UserInfo user={user} setUser={setUser} />;
      case 2:
        return <CardCredit card={card} setCard={setCard} />;
      case 3:
        return <YandexMap adress={adress} setAdress={setAdress} />;
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStepContent()}
      <button onClick={prevButton} disabled={currentStep === 1}>
        Предыдущий шаг
      </button>
      {!(currentStep === stepComponents.length) ? (
        <button onClick={nextButton} disabled={isDisable}>
          Следующий шаг
        </button>
      ) : (
        <button>Завершить заказ</button>
      )}
    </div>
  );
};

export default TheOrder;
