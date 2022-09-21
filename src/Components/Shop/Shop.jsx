import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { itemData } from '../../Redux/action';
import './Shop.css';

export default function Shop(props) {
  console.log(props);
  const [display, setDisplay] = useState(false);
  const fetchData = useSelector((state) => state.item);
  const dispatch = useDispatch();
  useEffect(() => {
    if (props.id) {
      dispatch(itemData(props.id));
    }
  }, [props.id]);
  useEffect(() => {
    if (fetchData.id) {
      setDisplay(true);
    }
  }, [fetchData]);
  return (
    <React.Fragment>
      {display ? (
        <div className='container mt-2 mb-2 bg-secondary shop text-center'>
          <div className='row'>
            <h2 className='mt-5'>Category : {fetchData.category}</h2>
            <div className='col-6'>
              <img
                className='mt-5 shop-img'
                src={fetchData.image}
                alt={fetchData.alt}
              />
            </div>
            <div className='col-6'>
              <h3 className='mt-5'>Title:{fetchData.title}</h3>
              <hr />
              <h3 className='mt-2 desp'>Description:{fetchData.description}</h3>
              <hr />
              <h3>Price: {fetchData.price} Rs</h3>
              <hr />
              <h3>Rating: {fetchData.rating.rate} / 5</h3>
              <button
                className='btn btn-primary w-100'
                onClick={() => alert('Thank You')}
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      ) : (
        'Loading...'
      )}
    </React.Fragment>
  );
}
