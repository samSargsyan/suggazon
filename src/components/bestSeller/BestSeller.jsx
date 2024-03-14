import './bestSeller.scss';
import headphones from '../../images/headphone.png';
import { Link } from 'react-router-dom';

const BestSeller = () => {
  return (
    <div className='bestSeller'>
      <h2>Best Sales</h2>
      {Array.from({ length: 9 }, (_, index) => (
        <Link to={`/inside/1`}>
          <div className="bestItem" key={index}>
            <img src={headphones} alt={headphones} />
            <div className='bestSales'>
              <span className='bestItemTitle'>Black Headphones</span>
              <span className='bestItemDescription'>A comfy headphone, and stylish...</span>  
            </div> 
            <span>Price $39.99</span> 
          </div>
        </Link>
      ))}
    </div>
  )
}

export default BestSeller