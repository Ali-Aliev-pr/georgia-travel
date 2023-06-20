import React from 'react'
import Preview from '../preview/Preview';
import styles from './Main.module.css';
import photo from '../../../assets/img/about.png'
import tour from '../../../assets/img/tour.jpeg'
import food from '../../../assets/img/food.jpg'
import history from '../../../assets/img/history.jpeg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [])

  return (
    <>
      <Preview 
        title={'Добро пожалевать в Грузию!'} 
        description={'Грузия – удивительная страна с богатой культурой, красивой природой и гостеприимными людьми. Отправляйтесь в увлекательное путешествие, чтобы открыть для себя прекрасные горные пейзажи, древние храмы и богатое кулинарное наследие.'}
        imagURL={photo}
      />
      <div className={styles.main}>
          <div className={styles.main__cards}>
            <section className={styles.main__card}>
                <img src='https://allgeotrip.ru/sites/default/files/georgia.jpg' alt="" />
                <h2>Природа Грузии</h2>
                <p>Природа Грузии восхитительна и разнообразна. Эта небольшая страна, расположенная между Кавказскими горами и Чёрным морем, обладает уникальными ландшафтами и природными достопримечательностями.</p>
                <button><Link to='/nature' style={{'color': 'white'}}>Подробнее</Link></button>
            </section>
            <section className={styles.main__card}>
                <img src={tour} alt="" />
                <h2>Туры по Грузии</h2>
                <p>Грузия предлагает разнообразные туры, которые удовлетворят интересы каждого путешественника. Независимо от того, вы предпочитаете исторические достопримечательности, горные походы, винные дегустации или пляжный отдых, в Грузии найдется что-то особенное для каждого.</p>
                <button><Link to='/tours' style={{'color': 'white'}}>Подробнее</Link></button>
            </section>
            <section className={styles.main__card}>
                <img src={food} alt="" />
                <h2>Грузинская кухня</h2>
                <p>Грузинская кухня - это истинное искусство, которое завораживает своими уникальными вкусами и ароматами. Еда в Грузии - это праздник для всех чувств, она отражает богатую историю, культуру и гостеприимство этой страны.</p>
                <button>Подробнее</button>
            </section>
          </div>
          <div className={styles.main__cards}>
            <section className={styles.main__card}>
                <img src={history} alt="" />
                <h2>История и культура</h2>
                <p>Грузия имеет древнюю и богатую историю, а ее культура уникальна и разнообразна. Вот краткий обзор истории и культуры Грузии:</p>
                <button>Подробнее</button>
            </section>
            <section className={styles.main__card}>
                <img src='https://billionnews.ru/uploads/posts/2019-04/1555347618_3.jpeg' alt="" />
                <h2>Активный отдых</h2>
                <p>Грузия предлагает множество возможностей для активного отдыха. Можно рассказать о походах в горы, велосипедных и верховых прогулках, рафтинге на горных реках, а также о возможностях зимних видов спорта, таких как горнолыжный спорт.</p>
                <button>Подробнее</button>
            </section>
            <section className={styles.main__card}>
                <img src='https://cdn.mygeotrip.com/file_manager/images/Travel%20Articles/Winemaking/Wine.jpg' alt="" />
                <h2>Виноделие</h2>
                <p>Грузия известна своими винными регионами и богатым винодельческим наследием. Можно рассказать о различных сортах грузинского вина, традиционных методах его производства и организовать дегустацию для посетителей.</p>
                <button>Подробнее</button>
            </section>
          </div>
      </div>
    </>
  )
}

export default Main