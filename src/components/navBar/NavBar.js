import styles from './NavBar.module.css'
import { AiOutlineHtml5, AiOutlineIdcard, AiOutlinePhone, AiOutlineRead } from "react-icons/ai";

import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <nav className={styles.NavBar_container}>
        <ul>
          <li><NavLink className={({ isActive }) =>
            isActive ? styles.active : undefined}
            to='/' ><AiOutlineIdcard /></NavLink>
          </li>

          <li><NavLink className={({ isActive }) =>
            isActive ? styles.active : undefined}
            to='/knowledge' ><AiOutlineHtml5 /></NavLink>
          </li>

          <li><NavLink className={({ isActive }) =>
            isActive ? styles.active : undefined}
            to='/projects' ><AiOutlineRead /></NavLink>
          </li>

          <li><NavLink className={({ isActive }) =>
            isActive ? styles.active : undefined}
            to='/contact' ><AiOutlinePhone /></NavLink>
          </li>
        </ul>
        </nav>
 

    </header>
  )
}

export default NavBar