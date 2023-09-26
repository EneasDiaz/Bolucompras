import './ItemListContainer.css'
import useCustomHook from '../../hooks/useCustomeHook';
import Json from '../../mocks/productos.json'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemListContainer.css'
import { NavLink, useParams } from 'react-router-dom';


const ItemListContainer = ({ showAllItems }) => {
    const { categoriaId } = useParams();
    const { data, loading, error } = useCustomHook(Json);

    if (loading) {
        return (
            <div className="loadingspinner">
                <div id="square1"></div>
                <div id="square2"></div>
                <div id="square3"></div>
                <div id="square4"></div>
                <div id="square5"></div>
            </div>)
    }

    if (error) {
        return <div><h1>hubo un error</h1></div>;
    }
    let titulo = showAllItems ? "" : categoriaId;
    const productosFiltrados = showAllItems ? data : data.filter(producto => producto.categoria === categoriaId);
    return (
        <div className='contenedor'>
            <h1>{titulo}</h1>{
                productosFiltrados.map((producto) => {
                    return (
                        <Card key={producto.id} style={{ width: '18rem' }}>
                            <Card.Img className='cardImage' variant="top" src={producto.imagen} />
                            <Card.Body>
                                <Card.Title>{producto.nombre}</Card.Title>
                                <Card.Text>${producto.precio}</Card.Text>
                                <NavLink to={`/categoria/${producto.categoria}/item/${producto.id}`}>
                                    <Button variant="primary">DETALLES</Button>
                                </NavLink>
                            </Card.Body>
                        </Card>
                    )
                }
                )
            }
        </div>)
}

export default ItemListContainer;

