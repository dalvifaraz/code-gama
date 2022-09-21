import { Link } from 'react-router-dom';

export const Card = ({ item }) => {
  return (
    <div className='col-4 p-2' key={item.id}>
      <div className='card' style={{ height: '35rem' }}>
        <div className='card-body'>
          <img className='card-img-top' src={item.image} alt={item.alt} />
          <div className='ps-1'>
            <h5 className='card-title pt-2'>{item.title}</h5>
            {item.description.length < 150 ? (
              <p className='card-text'>{item.description}</p>
            ) : (
              <p className='card-text'>{item.description.slice(0, 150)}...</p>
            )}
          </div>
          <Link to={`/products/${item.category}/${item.id}`}>
            <button className='btn btn-primary w-100 mt-2 stick'>
              Shop Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
