import './item.scss' ;
import headphone from '../../images/headphone.png';
import cart from '../../images/cartIcon.png';

const Item = ({item}) => {
  return (
    <div className='item'>
      <div className='itemPicture' style={{backgroundImage: `url(${item.image})`}}></div>
      <div className='itemDesc'>
        <span>{item.name}</span>
        <span>Price ${item.price}</span>
      </div>
      <div className='itemCart'></div>
    </div>
  )
}

export default Item;