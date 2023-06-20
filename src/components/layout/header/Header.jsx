import React from 'react'
import styles from './Header.module.css';
import photo from '../../../assets/img/logo2.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__wrapper}>
        <img src={photo} alt="" style={{width: '5%'}}/>
        <nav>
          <ul className={styles.list}>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/tours">Услуги</Link></li>
            <li><Link to="/favorites">Избранное</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;