import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './componentes/inicio/Inicio';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer';
import ItemDetail from './componentes/itemDetail/ItemDetail';

function App() {
  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Inicio/>}/>
        <Route exact path='/categoria/:categoriaId' element={<ItemListContainer showAllItems={false}/>}/>
        <Route exact path='/categoria/:categoriaId/item/:productoId' element={<ItemDetail/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

