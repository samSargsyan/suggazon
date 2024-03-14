import { useParams } from 'react-router-dom';
import './itemInside.scss';
import { Rating } from 'react-simple-star-rating'
import data from '../data';

const ItemInside = () => {
  const { id } = useParams();
  return (
    <div className='itemInside'>
     {data
     .filter(item => item.id === +id)
     .map(item => {
       return(
        <div className='itemInfo' key={item.id}>
          <h1>{item.name}</h1>
          <div className="itemInfoBox">
            <img src={item.image} alt={item.name} />
          </div>
          <div className='itemPriceDesc'>
            <p>{item.desc}</p>
            <div className='itemColor'>
              <span>Color: </span>
              <div className='colorBox'>
                <div className='colorPick redPick'></div>
                <div className='colorPick greenPick'></div>
                <div className='colorPick bluePick'></div>
                <div className='colorPick yellowPick'></div>
              </div>
            </div>
            <button className='priceButton'>
              $ {item.price}
            </button>
            <Rating initialValue={4.5} />
          </div>
        </div>
       )})
     } 
    </div>
  )
}

export default ItemInside