import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import Contador from './components/Contador'
import Header from './components/Header'
// import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <div> 
      <NavBar/>
      <Header/>
      <ItemListContainer />
      {/* <Contador /> */}
    </div>
  )
}

export default App