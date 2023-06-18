import { Outlet } from 'react-router-dom';
import './App.css';
import TheHeader from './components/Header/TheHeader';

function App() {
  return (
    <>
      <TheHeader></TheHeader>
      <Outlet></Outlet>
    </>
  );
}

export default App;
