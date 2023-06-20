import React from 'react'
import style from './Modal.module.css'
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom';

const Modal = ({open, data, cancel}) => {
  let navigate = useNavigate();
  console.log(data)
  return (
    <div className={open === true ? style.modal : style.modal__close}>
      <div className={style.modal__content}>
        <div className={style.modal__header}>
          <p>{data.name}</p>
          <button onClick={() => {cancel(false)}}>Отменить</button>
        </div>
        <div className={style.modal__inputs}>
          <input type="text" placeholder='Имя'/>
          <input type="text" placeholder='Фамилия'/>
          <InputMask mask="+9 (999) 999-99-99" maskChar="_" placeholder="Введите номер телефона" />
          <input placeholder='Введите свой Email' />
          <button onClick={() => {navigate('/')}}>Подать заявку на тур</button>
        </div>
      </div>
    </div>
  )
}

export default Modal