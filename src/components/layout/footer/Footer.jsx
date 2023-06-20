import React from 'react'
import style from './Footer.module.css'
import logo from '../../../assets/img/logo2.svg'

const Footer = () => {
  return (
    <div id='conatct' className={style.footer}>
      <div className={style.footer__wrapper}>
        <div className={style.footer__main}>
          <img src={logo} alt="" />
          <p className={style.footer__main__built}>Built by <span style={{'color': 'grey'}}>Aliev Ali</span></p>
          <p className={style.footer__main__powerd}>Powered by <span style={{'color': 'grey'}}>React</span></p>
          <p className={style.footer__main__resered}>© 2023 გართობაჯე. All Rights Reserved.</p>
        </div>
        <div className={style.footer__other}>
          <div className={style.footer__links}>
            <p className={style.footer__link__header}>Website</p>
            <p className={style.footer__link}>Home</p>
            <p className={style.footer__link}>Resources</p>
            <p className={style.footer__link}>Contact</p>
            <p className={style.footer__link}>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer