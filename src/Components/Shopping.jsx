import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Shop from './Shop/Shop';

export default function Shopping() {
  const { category, id } = useParams();
  return (
    <div>
      <Header />
      <Shop category={category} id={id} />
      <Footer />
    </div>
  );
}
