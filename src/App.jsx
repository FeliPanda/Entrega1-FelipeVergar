import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Contador from './components/Contador'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<>
            <Header />
            <ItemListContainer />
          </>} />
          <Route exact path='/category/:category' element={<ItemListContainer />} />
          <Route exact path='/item/:id' element={<ItemDetailContainer />} />

        </Routes>


        {/* <Contador /> */}
      </BrowserRouter>
    </div>
  )
}

export default App