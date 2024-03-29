import './App.css';
import MyComponent from './components/MyComponent.';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import MapComponent from './components/MapComponent';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/cart/cart';
import Checkout from './components/Checkout';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Events from './components/Events';
import Intercambiabilidad from './components/Intercambiabilidad';

function App() {
    return (
      <BrowserRouter>
        <NavBar />
        {<Events />}
        <Intercambiabilidad />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={''} />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Bienvenidos a mi tienda'} />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;