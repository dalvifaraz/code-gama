import React, { useState, useEffect } from 'react';
import { NavItem } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { onLoadCategory } from '../../Redux/action';
import './Category.css';
export default function Category() {
  const onLoadProductData = useSelector((state) => state.productData);
  const onLoadCategoriesData = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(onLoadCategory());
  }, []);

  const [display, setDisplay] = useState({
    electronics: true,
    jewelery: true,
    men: true,
    women: true,
  });

  return (
    <>
      <div className='category container mt-4' id='about'>
        <h2 className='text-center'>Category</h2>
        <div className='row ms-2 text-center'>
          <button
            className='btn btn-warning w-25'
            onClick={() =>
              setDisplay({ ...display, electronics: !display.electronics })
            }
          >
            Electronics
          </button>
          <button
            className='btn btn-warning w-25'
            onClick={() =>
              setDisplay({ ...display, jewelery: !display.jewelery })
            }
          >
            Jewelery
          </button>
          <button
            className='btn btn-warning w-25'
            onClick={() => setDisplay({ ...display, men: !display.men })}
          >
            Men's Clothing
          </button>
          <button
            className='btn btn-warning w-25'
            onClick={() => setDisplay({ ...display, women: !display.women })}
          >
            Women's Clothing
          </button>
          <button
            className='btn btn-primary'
            onClick={() =>
              setDisplay({
                ...display,
                women: true,
                men: true,
                jewelery: true,
                electronics: true,
              })
            }
          >
            Remove All Filters
          </button>
        </div>
      </div>
      {display.electronics && (
        <div className='containter-fluid category-row'>
          <div className='row text-center item-row'>
            <div className='col-3 best'>
              <h2>Best of Electronics</h2>
              <Link to='/products/electronics'>
                <button className='btn btn-primary mt-3'>View All</button>
              </Link>
              ;
            </div>
            {onLoadProductData.map((data, index) => {
              if (data.category === 'electronics') {
                return (
                  <div className='col-3 mt-1 pt-5' key={index}>
                    <Link to={`/products/${data.category}/${data.id}`}>
                      <img src={data.image} alt={data.title} />
                    </Link>
                    <h6>{data.title}</h6>
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      {display.jewelery && (
        <div className='containter-fluid category-row'>
          <div className='row text-center item-row'>
            <div className='col-3 best'>
              <h2>Best of Jewelery</h2>
              <Link to='/products/jewelery'>
                <button className='btn btn-primary mt-3'>View All</button>
              </Link>
            </div>
            {onLoadProductData.map((data, index) => {
              if (data.category === 'jewelery') {
                return (
                  <div className='col-3 mt-1 pt-5' key={index}>
                    <Link to={`/products/${data.category}/${data.id}`}>
                      <img src={data.image} alt={data.title} />
                    </Link>
                    <h6>{data.title}</h6>
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      {display.men && (
        <div className='containter-fluid category-row'>
          <div className='row text-center item-row'>
            <div className='col-3 best'>
              <h2>Best of Men's Clothing</h2>
              <Link to={`/products/men's clothing`}>
                <button className='btn btn-primary mt-3'>View All</button>
              </Link>
            </div>
            {onLoadProductData.map((data, index) => {
              if (data.category === `men's clothing`) {
                return (
                  <div className='col-3 mt-1 pt-5' key={index}>
                    <Link to={`/products/${data.category}/${data.id}`}>
                      <img src={data.image} alt={data.title} />
                    </Link>
                    <h6>{data.title}</h6>
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
      {display.women && (
        <div className='containter-fluid category-row'>
          <div className='row text-center item-row'>
            <div className='col-3 best'>
              <h2>Best of Women's Clothing</h2>
              <Link to={`/products/women's clothing`}>
                <button className='btn btn-primary mt-3'>View All</button>
              </Link>
            </div>
            {onLoadProductData.map((data, index) => {
              if (data.category === `women's clothing`) {
                return (
                  <div className='col-3 mt-1 pt-5' key={index}>
                    <Link to={`/products/${data.category}/${data.id}`}>
                      <img src={data.image} alt={data.title} />
                    </Link>
                    <h6>{data.title}</h6>
                  </div>
                );
              }
            })}
          </div>
        </div>
      )}
    </>
  );
}
