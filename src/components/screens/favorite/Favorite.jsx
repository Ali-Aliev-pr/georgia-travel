import React from 'react'
import { useEffect, useState } from 'react'
import style from './Favorite.module.css'

const Favorite = () => {

  let [tours, setTours] = useState([])
  let [open, setOpen] = useState(false)
  let [selected, setSelected] = useState('')

  useEffect(() => {
    const toursFromLocalStorage = JSON.parse(localStorage.getItem('favorites'));
    console.log(toursFromLocalStorage)
    setTours(toursFromLocalStorage)
  }, [])

  function saveData(id) {
    tours.map(i => {
      if(i.id === id) {
        setSelected(i)
      }
    })
    setOpen(true)
  }

  return (
    <>
      <div className={style.main}>
        {
          tours ?  tours.map(e => {
            return (
            <section key={e.id} className={style.main__card}>
              <img src={e.img} alt="" />
              <h2>{e.name}</h2>
              <p className={style.main__card__description}>{e.description}</p>
              <div className={style.main__card__info}>
                <p className={style.main__card__price}>${e.price}</p>
                <p style={{'color': 'gold'}}>{e.rating__text}</p>
              </div>
              <div className={style.main__card__buttons}>
                <button onClick={() => {saveData(e.id)}}>Записаться на тур</button>
                <button onClick={() => {setTours([])}}>Удалить из избранных</button>
                    {/* <button onClick={() => {saveData(e.id)}}>Записаться на тур</button> */}
                    {/* {
                      JSON.stringify(liked).indexOf(`id":${e.id}`) === -1 
                        ? <button onClick={() => {saveFavorite(e.id)}}>Добавить</button> 
                        : <button onClick={() => {deleteFavorite(e.id)}}>Удалить</button>
                    } */}
                  </div>
            </section>)
          })
          :
          <p>Нету</p>
        }
      </div>
    </>
  )
}

export default Favorite