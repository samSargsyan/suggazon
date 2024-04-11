import './leftBar.scss';
import logo from '../../images/logo.svg';
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom';
import left from '../../images/left.png';
import right from '../../images/right.png';

const LeftBar = ({ isOpen, setIsOpen }) => {
  return (
    <div className={`leftBar ${isOpen ? 'leftBarOpen' : 'leftBarClose'}`}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Menu />  
        <button
          className={`menuToggle ${isOpen ? 'buttonOpen' : 'buttonClose'}`} 
          onClick={() => setIsOpen(prev => prev === "" ? false : !prev)}>
          {isOpen || isOpen === "" ? <img src={left} alt="left" /> : <img src={right} alt="right" />}
        </button>
    </div>
  )
}

export default LeftBar;