import './ItemListContainer.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { query, where, collection, getFirestore, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ showAllItems }) => {
    const { categoriaId } = useParams();
    const [data, setData] = useState([]);
    const [loadingCategory, setLoadingCategory] = useState(true);
    const [error, setError] = useState();
    

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoadingCategory(true);
                const db = getFirestore();
                let queryRef;

                if (showAllItems) {
                    queryRef = collection(db, 'productos');
                } else {
                    queryRef = query(collection(db, 'productos'), where('categoria', '==', categoriaId));
                }

                const querySnapshot = await getDocs(queryRef);
                const newData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setData(newData);
                setLoadingCategory(false);
            } catch (error) {
                setError(error);
                setLoadingCategory(false);
            }
        };

        fetchData();
    }, [showAllItems, categoriaId]);

    if (loadingCategory) {
        return (
            <div>
                <div className="loadingspinner">
                    <div id="square1"></div>
                    <div id="square2"></div>
                    <div id="square3"></div>
                    <div id="square4"></div>
                    <div id="square5"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>La categoría que busca no existe</h1>
            </div>
        );
    }

    let titulo = showAllItems ? "" : categoriaId;

    return (
        <div className='contenedor'>
            <div>
                <h1>{titulo}</h1>
            </div>
            <div className='cardContenedor'>
            {data.map((producto) => (
                <Card key={producto.id} style={{ width: '18rem' }}>
                    <Card.Img className='cardImage' variant="top" src={producto.imagen} alt='imagen de producto' />
                    <Card.Body>
                        <Card.Title>{producto.nombre}</Card.Title>
                        <Card.Text>${producto.precio}</Card.Text>
                        <NavLink to={`/categoria/${producto.categoria}/item/${producto.id}`}>
                            <Button variant="primary">DETALLES</Button>
                        </NavLink>
                    </Card.Body>
                </Card>
            ))}
            </div>
        </div>
    );
}

export default ItemListContainer;

