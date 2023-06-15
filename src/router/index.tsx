import { Outlet, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      // <Provider store={store}>
      // </Provider>
      <App></App>
    ),
    children: [
      {
        path: '/',
        element: <Outlet></Outlet>,
      },
    ],
  },
  // { path: '*', element: <NotFound></NotFound> },
]);
