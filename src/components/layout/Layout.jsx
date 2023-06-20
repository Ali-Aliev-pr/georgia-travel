import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorite from '../screens/favorite/Favorite';
import Nature from '../screens/nature/Nature';
import Tours from '../screens/tours/Tours';
import Footer from './footer/Footer';
import Header from './header/Header'
import Main from './main/Main'
import Subscribe from './subscribe/Subscribe';

const Layout = () => {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/nature' element={<Nature />}/>
          <Route path='/tours' element={<Tours />}/>
          <Route path='/favorites' element={<Favorite />} />
        </Routes>

        <Subscribe />
        <Footer />
      </div>
    </Router>
  )
}

export default Layout