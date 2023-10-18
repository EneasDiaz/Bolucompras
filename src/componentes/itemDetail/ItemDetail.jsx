import { useParams } from "react-router-dom";
import {Card } from "react-bootstrap";
import './ItemDetail.css'
import {  useEffect, useState } from "react";
import { useCartContext } from "../../context/CartContex";
import ItemCount from '../ItemCount/ItemCount'
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";

const ItemDetail = () => {
    const { addToCart, cart, removeFromCart } = useCartContext()
    const [quantityInCart, setQuantityInCart] = useState(0);
    const { productoId } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const querySnapshot = await getDocs(collection(db, 'productos'));
                const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setData(newData);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);


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
        return (
            <div>
                <h1>El producto que estas buscando no existe</h1>
            </div>
        );
    }

    const producto = data.find((producto) => producto.id.toString() === productoId);

    if (!producto) {
        return <div className="nonDetail"><h1>El producto que esta buscando no existe</h1></div>;
    }

    const { id, nombre, precio, imagen, categoria, descripcion, stock } = producto || {}
    
    const currentItemInCart = cart.items.find((item) => item.id === id);

    const handleAddToCart = (count) => {
        if (count > 0) {
            setQuantityInCart(count);

            if (currentItemInCart) {
                removeFromCart(id);
            }

            addToCart({
                id,
                nombre,
                imagen,
                precio,
                quantity: count
            });
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se puede sumar 0 productos',
            });
        }
    };

    return (
        <div className="cardDetailContainer">
            <Card className="text-center cardDetail">
            <Card.Header>{categoria}</Card.Header>
            <Card.Body>
                <Card.Img className="imagenDetail" variant="top" src={imagen} alt='foto producto' />
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{descripcion}</Card.Text>
                <ItemCount stock={stock} initial={quantityInCart} onAdd={handleAddToCart} productId={id}/>
            </Card.Body>
        </Card>
        </div>
        
    );
}

export default ItemDetail;

