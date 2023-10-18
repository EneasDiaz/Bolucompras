import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/inicio/Inicio';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer';
import  Carrito  from './componentes/Carrito/Carrito';
import CartProvider from './context/CartProvider';
import ItemDetail from './componentes/ItemDetail/ItemDetail';
import NavBar from './componentes/navbar/NavBar';

function App() {
  return (
    <>
    <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer showAllItems={false}/>}/>
        <Route exact path='/categoria/:categoriaId/item/:productoId' element={<ItemDetail/>}/>
        <Route exact path="/cart" element={<Carrito />} />
      </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App

