import React from 'react'
import style from './Tours.module.css'
import Preview from '../../layout/preview/Preview'
import logo from '../../../assets/img/tours2.png'
import { useEffect } from 'react'
import { useState } from 'react'
import Modal from '../../layout/modal/Modal'

const Tours = () => {

  const toursList = [
    { 
      id: 1, 
      name: 'Вардзия', 
      price: 100, 
      img: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/867cde66-347c-48c1-ba66-7abf6e73f80b/-/scale_crop/684x455/center/-/quality/lightest/-/format/jpeg/', 
      description:'Узнайте горы Кавказа, посетите пещерный город Вардзия, крепость Рабат и прогуляйтесь по Боржомскому парку.',
      rating: 4.5,
      rating__text: "★★★★"
    },
    { 
      id: 2, 
      name: 'Кахетия', 
      price: 200, 
      img: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/0460cd9d-37cb-4f69-a137-18d961593da5/-/scale_crop/684x455/center/-/quality/lightest/-/format/jpeg/',
      description: 'Однодневный тур в Кахетию на автобусе. Вы побываете в самых интересных и красивых местах, а также попробуете лучшее грузинское вино.',
      rating: 2.5,
      rating__text: "★★"
    },
    { 
      id: 3, 
      name: 'Казбег', 
      price: 150, 
      img:'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/1d3106c3-f2a0-479c-aefc-627fcd783145/-/scale_crop/684x455/center/-/quality/lightest/-/format/jpeg/',
      description: 'Поездка по Военно-Грузинской дороге. Горное озеро, замок Ананури, пейзажи Казбеги и Гадаури, подъем в джипе к храму Святой Троицы в Гергети.',
      rating: 5.0,
      rating__text: "★★★★★"
    },
    { 
      id: 4, 
      name: 'Мцхета и Боржоми индивидуальный тур!', 
      price: 50, 
      img: 'https://7d9e88a8-f178-4098-bea5-48d960920605.selcdn.net/96212271-12e7-45dd-8c40-aa78f8555191/-/scale_crop/684x455/center/-/quality/lightest/-/format/jpeg/', 
      description:'Вы побываете в тех местах которыми восхищались и любили великие люди прошедших столетий.',
      rating: 3,
      rating__text: "★★★"
    },
    { 
      id: 5, 
      name: 'Вглубь Тбилиси', 
      price: 30, 
      img: 'http://localhost:3002/static/media/tour.d0e1cdfd1cf319aeb240.jpeg', 
      description:'3-часовая индивидуальная пешеходная экскурсия по историческому центру Тбилиси. Во время этой экскурсии вы погрузитесь в богатую историю и культуру Тбилиси, столицы Грузии.',
      rating: 3,
      rating__text: "★★★"
    },
    { 
      id: 6, 
      name: 'Тур по Кутаиси', 
      price: 40, 
      img: 'https://summerhotels.ru/wp-content/uploads/2017/09/kutaisi-1.jpg', 
      description:'Тур в Кутаиси предлагает уникальную возможность погрузиться в богатую историю и культуру Грузии, исследовать величественные достопримечательности.',
      rating: 3,
      rating__text: "★★★★"
    },
  ];

  const toursJson = JSON.stringify(toursList)
  localStorage.setItem('tours', toursJson);
 
  let [tours, setTours] = useState('')
  let [sort, setSort] = useState('default')
  let [open, setOpen] = useState(false)
  let [selected, setSelected] = useState('')
  let [liked, setLiked] = useState('')

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

    const toursFromLocalStorage = JSON.parse(localStorage.getItem('tours'));
    setTours(toursFromLocalStorage)

    const favorites = JSON.parse(localStorage.getItem('favorites'))
    setLiked(favorites)
  }, [])  

  function lower() {
    setSort('price')
    let copy = [...tours].sort((a, b) => a.price - b.price)
    setTours(copy)
  }

  function normal() {
    setSort('default')
    const toursFromLocalStorage = JSON.parse(localStorage.getItem('tours'));
    setTours(toursFromLocalStorage)
  }

  function sortPopular() {
    setSort('popular')
    let copy = [...tours].sort((a, b) => b.rating - a.rating)
    setTours(copy)
  }

  function saveData(id) {
    tours.map(i => {
      if(i.id === id) {
        setSelected(i)
      }
    })
    setOpen(true)
  }

  function saveFavorite(id) {
    const favorites = JSON.parse(localStorage.getItem('favorites'))
    let favorite = {'id': '', 'name': '', 'price':'', 'img': '', 'description': '', 'rating': '', 'rating__text': '' }
    tours.filter((i) => {
      if(i.id === id) {
        // favorite.push(i)
        // console.log(i)
        favorite.id = i.id
        favorite.name = i.name
        favorite.price = i.price
        favorite.img = i.img
        favorite.description = i.description
        favorite.rating = i.rating
        favorite.rating__text = i.rating__text
      }
    })
    // console.log(favorite)
    favorites.push(favorite)
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setLiked(favorites)
  }

  function deleteFavorite(id) {
    let copy = liked
    tours.filter(i => {
      if (i.id === id) {
        copy.pop(i)
      }
    })
    // setLiked((prev) => prev.filter(item => item.id !== id ))
    // console.log(liked)
    setLiked(copy)
    localStorage.setItem('favorites', JSON.stringify(liked));
  }

  return (
    <>
      <Preview 
        title='Туры по грузии' 
        imagURL={logo} 
        description="В Грузии предлагается множество увлекательных туров, чтобы путешественники могли полностью насладиться красотами этой удивительной страны." 
      />

      <div className={style.main}>
        <div className={style.main__buttons}>
          <button className={sort === 'default' ? style.selected__button : ''} onClick={() => normal()}>По умолчанию</button>
          <button className={sort === 'price' ? style.selected__button : ''} onClick={() => lower()}>По цене</button>
          <button className={sort === 'popular' ? style.selected__button : ''} onClick={() => sortPopular()}>По рейтингу</button>
        </div>

        <div className={style.main__cards}>
            {tours && tours.map(e => {
              return (
                <section key={e.id} className={style.main__card}>
                  <img src={e.img} alt="" />
                  <h2>{e.name}</h2>
                  <p className={style.main__card__description}>{e.description}</p>
                  <div className={style.main__card__info}>
                    <p className={style.main__card__price}>${e.price}</p>
                    <p style={{'color': 'gold'}}>{e.rating__text}</p>
                  </div>
                  {/* <button onClick={() => {setOpen(true)}}>Записаться на тур</button> */}
                  <div className={style.main__card__buttons}>
                    <button onClick={() => {saveData(e.id)}}>Записаться на тур</button>
                    {
                      JSON.stringify(liked).indexOf(`id":${e.id}`) === -1 
                        ? <button onClick={() => {saveFavorite(e.id)}}>Добавить в избранное</button> 
                        : <button onClick={() => {deleteFavorite(e.id)}}>Удалить из избранные </button>
                    }
                    {/* <button 
                      onClick={() => {saveFavorite(e.id)}}>
                        {JSON.stringify(liked).indexOf(`id":${e.id}`) === -1 ? 'Добавить' : 'Удалить'}
                    </button> */}
                  </div>
                </section>
              )
            })}
          </div>
        <Modal open={open} data={selected} cancel={setOpen}/>
      </div>
    </>
  )
}

export default Tours;