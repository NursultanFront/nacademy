import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import HomeView from '../pages/HomeView';
import { store } from '../store';

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
        ],
      },
    ],
  },
  // { path: '*', element: <NotFound></NotFound> },
]);
