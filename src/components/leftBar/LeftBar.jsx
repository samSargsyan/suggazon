import './leftBar.scss';
import logo from '../../images/logo.svg';
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LeftBar = () => {
  const [isOpen, setIsOpen] = useState("");
  return (
    <div className={`leftBar ${isOpen === "" ?  "" : isOpen ? 'leftBarOpen' : 'leftBarClose'}`}>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Menu />  
        <button
          className={`menuToggle ${isOpen === "" ?  "" : isOpen ? 'buttonOpen' : 'buttonClose'}`} 
          onClick={() => setIsOpen(prev => prev === "" ? false : !prev)}>
          {isOpen || isOpen === "" ? '<' : '>'}
        </button>
    </div>
  )
}

export default LeftBar;