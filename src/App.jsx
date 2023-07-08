import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Cart from './components/Cart'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import ShoppingCartContextProvider from './context/ShoppingCartContext'



const App = () => {
  return (
    <div>
      <ShoppingCartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<>
              <Header />
              <ItemListContainer />
            </>} />
            <Route exact path='/category/:category' element={<ItemListContainer />} />
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />

          </Routes>
        </BrowserRouter>
      </ShoppingCartContextProvider>
            

    </div>
  )
}

export default App