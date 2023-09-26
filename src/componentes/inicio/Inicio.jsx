import ItemListContainer from '../itemListContainer/ItemListContainer'
import './inicio.css'

const Inicio = () => {
    return (
        <>
            <div className='inicio'>
                <h1>Bienvenidos</h1>
                <p>¡Bolucompras es el Bazar en línea de tus sueños! Descubre tesoros únicos y maravillosos, desde artículos artesanales hasta gadgets sorprendentes. ¡Explora, compra y haz que cada experiencia sea memorable!</p>
            </div>
            <div  className='productos'>
                <h1>Productos</h1>
                <ItemListContainer showAllItems={true}/>
            </div>
        </>
        
    )
}

export default Inicio

