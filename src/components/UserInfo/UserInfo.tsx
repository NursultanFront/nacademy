import { Dispatch, SetStateAction } from 'react';
import { User } from '../../pages/TheOrder/TheOrder';

type Props = {
  user: User;
  setUser: Dispatch<SetStateAction<User>>;
};

const UserInfo = ({ setUser, user }: Props) => {
  return (
    <div>
      <label htmlFor="firstName">Имя:</label>
      <input
        required
        id="firstName"
        type="text"
        value={user.firstName}
        onChange={(event) => setUser({ ...user, firstName: event.target.value })}
      />

      <label htmlFor="lastName">Фамилия:</label>
      <input
        required
        id="lastName"
        type="text"
        value={user.lastName}
        onChange={(event) => setUser({ ...user, lastName: event.target.value })}
      />
    </div>
  );
};

export default UserInfo;
