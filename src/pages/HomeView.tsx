import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../redux-hooks/redux-hooks';
import { fetchProducts } from '../store/productSlice';

const HomeView = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((store) => store.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <ul>
        {product.data.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default HomeView;
