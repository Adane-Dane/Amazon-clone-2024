// import { useState } from 'react'

import { Carousel } from 'react-responsive-carousel'
import './App.css'
import Header from './Components/Header/Header'
import CarouselEffect from './Components/Carousel/CarouselEffect'
import Category from './Components/Category/Category'
import Product from './Components/Product/Product'
import Routing from './Router'

function App() {

  return (
    <>
      {/* <Header />
      <CarouselEffect />
      <Category />
      <Product /> */}
      <Routing />
    </>
  );
}

export default App
