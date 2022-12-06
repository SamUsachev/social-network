import React from 'react';
import finalPropsSelectorFactory from 'react-redux/es/connect/selectorFactory';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
const Header = (props) => {
  debugger;
  return (
    <header className={style.header}>
      <img
        src="https://aqua-effect.ru/u/7006e31972670fce2b7be357b4b05e85-540x406.png"
        width={65}
      />
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
  );
};
export default Header;
