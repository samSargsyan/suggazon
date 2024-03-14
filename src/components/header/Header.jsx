import './header.scss';
import cart from '../../images/cartIcon.png';
import searchIcon from '../../images/searchIcon.png';
import filterIcon from '../../images/filterIcon.png';

const Header = () => {
    return(
        <div className='header'>
            <div className='headerTitle'>
                <h1>jhgjkhj</h1>
                <h4>ihskbciu</h4>
            </div>
            <div className='headerSearch'>
                <div className="searchBox">
                    <div className='searchBoxItems'>
                        <img src={searchIcon} alt="searchIcon" />
                        <input type="search" placeholder='Search Product' />
                    </div>
                    <img src={filterIcon} alt="filterIcon" />
                </div>
                <img src={cart} alt="cart" />
            </div>
        </div>
    )
} 

export default Header;