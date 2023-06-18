import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import HomeView from '../pages/HomeView/HomeView';
import { store } from '../store';
import TheCart from '../pages/TheCart/TheCart';
import TheOrder from '../pages/TheOrder/TheOrder';
import NotFound from '../pages/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Provider store={store}>
        <App></App>
      </Provider>
    ),
    children: [
      {
        path: '/',
        element: <Outlet />,
        children: [
          {
            path: '/',
            element: <HomeView />,
          },
          {
            path: 'cart',
            element: <TheCart />,
          },
          {
            path: '/order',
            element: <TheOrder />,
          },
          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
    ],
  },
  // { path: '*', element: <NotFound></NotFound> },
]);
