import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux-hooks/redux-hooks';
import {
  SortOrder,
  SortPayload,
  fetchProducts,
  sortByName,
  sortByPrice,
} from '../store/productSlice';
import { Link } from 'react-router-dom';
import { Route } from '../router/route';
import Grid from '@mui/material/Grid';
import CardItem from '../components/CardItem/CardItem';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';

interface ButtonFilter {
  id: number;
  order: SortOrder;
  title: string;
  method: ActionCreatorWithPayload<SortPayload>;
}

const buttonFilter: ButtonFilter[] = [
  { id: 1, order: 'asc', title: 'Имя по возрастанию', method: sortByName },
  { id: 2, order: 'desc', title: 'Имя по убыванию', method: sortByName },
  { id: 3, order: 'asc', title: 'Цена по возрастанию', method: sortByPrice },
  { id: 4, order: 'desc', title: 'Цена по убыванию', method: sortByPrice },
];

const HomeView = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector((store) => store.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (product.loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <div>
        <Link to={Route.COURT}>Cart</Link>
      </div>
      <div>
        {buttonFilter.map((item) => {
          return (
            <button key={item.id} onClick={() => dispatch(item.method({ order: item.order }))}>
              {item.title}
            </button>
          );
        })}
      </div>

      <Grid container spacing={2} columns={{ xs: 1, sm: 8, md: 12 }}>
        {product.data.map((item) => {
          return <CardItem key={item.id} card={item}></CardItem>;
        })}
      </Grid>
    </div>
  );
};

export default HomeView;
