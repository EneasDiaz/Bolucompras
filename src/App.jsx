import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/navbar/navbar';
import ItemListContainer from './componentes/itemListContainer/ItemListContainer';


function App() {
const greeting="Agregando Props" 
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={greeting}/>
    </>
  )
}

export default App
