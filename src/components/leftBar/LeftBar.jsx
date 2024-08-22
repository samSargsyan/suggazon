import React from 'react';
import './leftBar.scss';
import logo from '../../images/logo.svg';
import Menu from '../menu/Menu';
import { Link } from 'react-router-dom';

const LeftBar = ({ isOpen, setIsOpen }) => {
  return (
    <>
      <button
        className={`menuToggle ${isOpen ? 'buttonOpen' : 'buttonClose'}`}
        onClick={() => setIsOpen(prev => !prev)}
      >
        <div className="icon">
          <div className={`bar bar1 ${isOpen ? 'barOpen1' : 'barClose1'}`}></div>
          <div className={`bar bar2 ${isOpen ? 'barOpen2' : 'barClose2'}`}></div>
          <div className={`bar bar3 ${isOpen ? 'barOpen3' : 'barClose3'}`}></div>
        </div>
      </button>
      <div className={`leftBar ${isOpen ? 'leftBarOpen' : 'leftBarClosed'}`}>
        <div className="leftBarHeader">
          <Link to="/">
            <img src={logo} alt="Company Logo" className="logo" />
          </Link>
        </div>
        {isOpen && <Menu />}
      </div>
    </>
  );
};

export default LeftBar;
