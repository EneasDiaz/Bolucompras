import { useParams } from "react-router-dom";
import Json from '../../mocks/productos.json'
import useCustomHook from "../../hooks/useCustomeHook";
import { Button, Card } from "react-bootstrap";
import './ItemDetail.css'

const ItemDetail = () => {
    const { productoId } = useParams();
    const { data, loading, error } = useCustomHook(Json);

    if (loading) {
        return (
            <div className="loadingspinner">
                <div id="square1"></div>
                <div id="square2"></div>
                <div id="square3"></div>
                <div id="square4"></div>
                <div id="square5"></div>
            </div>
        );
    }

    if (error) {
        return <div><h1>Hubo un error</h1></div>;
    }

    const producto = data.find((producto) => producto.id.toString() === productoId);


    if (!producto) {
        return <div><h1>Producto no encontrado</h1></div>;
    }

    return (
        <Card className="text-center">
            <Card.Header>{producto.categoria}</Card.Header>
            <Card.Body>
                <Card.Img  variant="top" src={producto.imagen} />
                <Card.Title>{producto.nombre}</Card.Title>
                <Card.Text>{producto.descripcion}</Card.Text>
                <Button variant="primary">AGREGAR AL CARRITO</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Descuento a partir de 3 unidades</Card.Footer>
        </Card>
    );
}

export default ItemDetail;

