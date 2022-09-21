import React, { useEffect, useState } from 'react';
import './Cards.css';
import { Card } from './Card';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
export default function Cards(props) {
  const [productData, setProductData] = useState([]);
  const onLoadData = useSelector((state) => state.productData);
  const { category } = useParams();
  // const category = props.match.params.category;
  useEffect(() => {
    if (onLoadData) {
      setProductData(onLoadData);
    }
  }, [onLoadData]);
  return (
    <React.Fragment>
      <div className='row p-4'>
        <div className='text-center'>
          <h2>Shop Now</h2>
        </div>
        {productData.length > 0 &&
          productData.map((item) => {
            if (category === undefined) {
              return <Card item={item} />;
            }
            if (category === item.category) {
              return <Card item={item} />;
            }
          })}
      </div>
    </React.Fragment>
  );
}
