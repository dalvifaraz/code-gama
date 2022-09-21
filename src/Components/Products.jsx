import React from 'react';
import Cards from './Cards/Cards';
import Footer from './Footer/Footer';
import Header from './Header/Header';

export default function Products() {
  return (
    <div className='Main'>
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}
