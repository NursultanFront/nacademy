import { Route } from '../../router/route';
import { Link } from 'react-router-dom';
import './Header.scss';

const TheHeader = () => {
  return (
    <header className="header">
      <button>
        <Link to={Route.HOME}>Home</Link>
      </button>
      <button>
        <Link to={Route.COURT}>Корзина</Link>
      </button>
    </header>
  );
};

export default TheHeader;
