import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux-hooks/redux-hooks';
import { fetchProducts, sortByName, sortByPrice } from '../store/productSlice';

const HomeView = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((store) => store.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (product.loading) {
    <p>Loading</p>;
  }

  return (
    <div>
      <button
        onClick={() => {
          dispatch(sortByName({ order: 'asc' }));
        }}
      >
        по имени вверх
      </button>
      <button
        onClick={() => {
          dispatch(sortByName({ order: 'desc' }));
        }}
      >
        по имени вниз
      </button>

      <button
        onClick={() => {
          dispatch(sortByPrice({ order: 'desc' }));
        }}
      >
        по Цене вниз
      </button>

      <button
        onClick={() => {
          dispatch(sortByPrice({ order: 'asc' }));
        }}
      >
        по Цене вверх
      </button>

      <ul>
        {product.data.map((item) => {
          return (
            <li key={item.id}>
              <div>{item.title}</div>
              <img src={item.thumbnail} alt="" />
              <div>{item.price}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HomeView;
