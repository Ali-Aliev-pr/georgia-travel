import React from 'react'
import styles from './Preview.module.css'

const Preview = ({title, description, imagURL}) => {
  return (
    <div className={styles.preview}>
      <section className={styles.preview__wrapper}>
        <div className={styles.preview__info}>
          <h2 className={styles.preview__title}>{title}</h2>
          <p className={styles.preview__description}>
            {description}
          </p>
          <button className={styles.preview__button}>Подробнее</button>
        </div>
        <div className={styles.preview__image}>
          <img src={imagURL} alt="" width={'66%'} />
        </div>
      </section>
    </div>
  )
}

export default Preview