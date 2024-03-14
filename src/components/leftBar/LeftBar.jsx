import './leftBar.scss';
import logo from '../../images/logo.svg';
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom';

const LeftBar = () => {
  return (
    <div className='leftBar'>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Menu />    
    </div>
  )
}

export default LeftBar;