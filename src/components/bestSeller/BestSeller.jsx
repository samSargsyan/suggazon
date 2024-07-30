import './bestSeller.scss';
import data from "../data";

const BestSeller = () => {
  return (
    <div className='bestSeller'>
      <h2>Best Sales</h2>
      {data.map((item, index) => (
        <a href={item.link} key={index}>                   
          <div className="bestItem" >
            <img src={item.image} alt={item.name} />
            <div className='bestSales'>
              <span className='bestItemTitle'>{item.name}</span> 
            </div> 
            <span>Price ${item.price}</span> 
          </div>
        </a> 
      ))}
    </div>
  )
}

export default BestSeller