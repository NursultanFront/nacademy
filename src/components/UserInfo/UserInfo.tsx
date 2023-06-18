import { Dispatch, SetStateAction } from 'react';
import { User } from '../../pages/TheOrder/TheOrder';
import '../../assets/input.scss';

type Props = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

const UserInfo = ({ setUser, user }: Props) => {
  return (
    <div className="input__wrapper">
      <div className="input__item">
        <label htmlFor="firstName">Имя:</label>
        <input
          required
          id="firstName"
          type="text"
          value={user.firstName}
          onChange={(event) => setUser({ ...user, firstName: event.target.value })}
        />
      </div>

      <div className="input__item">
        <label htmlFor="lastName">Фамилия:</label>
        <input
          required
          id="lastName"
          type="text"
          value={user.lastName}
          onChange={(event) => setUser({ ...user, lastName: event.target.value })}
        />
      </div>
    </div>
  );
};

export default UserInfo;
