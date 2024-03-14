import './menu.scss';
import explore from '../../images/exploreIcon.png';
import home from '../../images/homeIcon.png';
import cart from '../../images/cartIcon.png';
import category from '../../images/categoryIcon.png';
import { useState } from 'react';

const Menu = () => {

    const [active, setActive] = useState('');

    const toggleSub = () => {
        if(active === 'subMenuActive'){
            setActive('subMenuPass')
        }else{
            setActive('subMenuActive')
        }
    }
    //toggle@ bacatrel, poxel timingner@

    return(
        <div className='menu'>
            <div className='menuItem'>
                <img src={home} alt="home" />
                <span>Home</span>
            </div>
            <div className='menuItem' onClick={toggleSub}>
                <img src={category} alt="category" />
                <span>Categories</span>
            </div>
            <div className={`subMenu ${active}`}>
                <span>Homegoods</span>
                <span>Clothing</span>
                <span>Gadgets</span>
                <span>Wellness</span>
                <span>Accesories</span>
                <span>Kids</span>
            </div>
            <div className='menuItem'>
                <img src={explore} alt="explore" />
                <span>Explore</span>
            </div>
            <div className='menuItem'>
                <img src={cart} alt="cart" />
                <span>Cart</span>
            </div>
        </div>
    )
}

export default Menu;