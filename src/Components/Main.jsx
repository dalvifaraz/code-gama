import React, { useReducer } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Slider from './Slider/Slider';
import About from './About/About';
import { useDispatch, useSelector } from 'react-redux';
import { onLoad } from '../Redux/action';
import { Reducer } from '../Redux/reducer';
import Category from './Category/Category';
export default function Main() {
  const onLoadData = useSelector((state) => state.productData);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(onLoad());
  }, []);
  return (
    <div className='Main'>
      <Header />
      <Slider />
      <Category />
      <About />
      <Footer />
    </div>
  );
}
