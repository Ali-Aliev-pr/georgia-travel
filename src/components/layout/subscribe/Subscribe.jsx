import React from 'react'
import style from './Subscribe.module.css'

const Subscribe = () => {
  return (
    <div className={style.subscribe}>
      <div className={style.subscribe__wrapper}>
        <section className={style.subscribe__info}>
          <h2 className={'style.subscribe-info__title'}>Получайте новую информацию</h2>
          <p>Вы получите свежую информацию. Прямо в вашу почту.</p>
          <div className={style.subscribe__action}>
            <input type="text" placeholder='Введите свой Email' />
            <button>Подписаться</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Subscribe;