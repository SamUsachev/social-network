import React from 'react'
import style from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
function NavBar() {
  return (
    <nav className={style.nav}>
      <ul className={style.text}>
        <ol>
          <NavLink to='profile'><a className={style.but}>Profile</a> </NavLink>
        </ol>
        <ol>
          <NavLink to='messages'><a className={style.but}>Messages</a></NavLink>
        </ol>
        <ol>
          <a href='news' className={style.but}>News</a>
        </ol>
        <ol>
          <a href='music' className={style.but}>Music</a>
        </ol>
        <ol>
          <a href='settings' className={style.but}>Settings</a>
        </ol>
      </ul>
    </nav>
  )
}
export default NavBar
