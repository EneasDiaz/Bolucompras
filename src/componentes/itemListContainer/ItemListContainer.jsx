import Button from 'react-bootstrap/Button';
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return(<div className='ButtonContenedor'>
        <Button className="ItemButton">{greeting}</Button>
        </div>
    )
}

export default ItemListContainer