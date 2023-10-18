import { useState } from "react";
import { useCartContext } from "../../context/CartContex";
import {addDoc, collection, getFirestore} from 'firebase/firestore';
import './Carrito.css'
import Swal from "sweetalert2";

const Carrito = () => {
    const { cart, removeFromCart } = useCartContext();
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [emailMatch, setEmailMatch] = useState(true);
    const [isFormValid, setIsFormValid] = useState(false);
    
    

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setEmailMatch(newEmail === confirmEmail);
        setIsFormValid(
            nombre.trim() !== '' &&
            apellido.trim() !== '' &&
            telefono.trim() !== '' &&
            newEmail.trim() !== '' &&
            confirmEmail.trim() !== '' &&
            newEmail === confirmEmail &&
            cart.items.length > 0
        );
    }


    const handleConfirmEmailChange = (e) => {
        const newConfirmEmail = e.target.value;
        setConfirmEmail(newConfirmEmail);
        setEmailMatch(email === newConfirmEmail);
        setIsFormValid(
            nombre.trim() !== '' &&
            apellido.trim() !== '' &&
            telefono.trim() !== '' &&
            email.trim() !== '' &&
            newConfirmEmail.trim() !== '' &&
            email === newConfirmEmail &&
            cart.items.length > 0
        );
    }

    const handleRemoveFromCart = (productId) => {
        const removedItem = cart.items.find((item) => item.id === productId);
        if (removedItem) {
            removeFromCart(removedItem);
        }
    };

    

    const handleCompraClick = () => {
        if (!isFormValid) {
            return;
        }

        const orderData = {
            buyer: {
                name: nombre,
                phone: telefono,
                email: email,
            },
            items: cart.items.map((item) => {
                return {
                    id: item.id,
                    title: item.nombre,
                    quantity: item.quantity,
                    price: item.precio,
                };
            }),
            date: new Date().toISOString(),
            total: cart.total.toFixed(2),
        };

        const db = getFirestore();
        const ordersCollection = collection(db, 'ordenes');

        addDoc(ordersCollection, orderData)
            .then((docRef) => {
                const orderId = docRef.id;
                Swal.fire({
                    icon: 'success',
                    title: 'Exito',
                    text: `La orden se ha registrado con éxito. ID de orden: ${orderId}`,
                })
                setNombre('');
                setApellido('');
                setTelefono('');
                setEmail('');
                setConfirmEmail('');
                setEmailMatch(true);
                cart.items.forEach((item) => {
                    removeFromCart(item);
                });
            })
            .catch((error) => {
                console.error("Error al registrar la orden:", error);
            });
    };



    return (
        <div className="carro">
            <div className="container carroConteiner">
            <div className="card">
                <div className="card-header">
                    <h6 className="card-title text-center">Carro</h6>
                </div>
                <div className="card-body">
                    <div className="inputs">
                        <input className="inputCarro" type="text" placeholder="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        <input className="inputCarro" type="text" placeholder="Apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                        <input className="inputCarro" type="text" placeholder="Teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                        <input className="inputCarro" type="email" placeholder="Correo Electrónico" value={email} onChange={handleEmailChange} />
                        <input className="inputCarro" type="email" placeholder="Confirmar Correo Electrónico" value={confirmEmail} onChange={handleConfirmEmailChange} />
                    </div>
                    {!emailMatch && <p className="text">Los correos electrónicos no coinciden.</p>}
                    {cart.items.length === 0 ? (
                        <p className="text-center">Carrito vacío</p>
                    ) : (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Cantidad</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.items.map((item) => (
                                    <tr key={item.id}>
                                        <td>
                                            <img
                                                style={{ width: "10%", height: "10%" }}
                                                src={item.imagen}
                                                alt={item.nombre}
                                            />
                                        </td>
                                        <td>{item.nombre}</td>
                                        <td>${item.precio}</td>
                                        <td>{item.quantity}</td>
                                        <td>${(item.precio * item.quantity).toFixed(2)}</td>
                                        <td>
                                        <button onClick={() => handleRemoveFromCart(item.id)} className="btn btn-danger" >
                                            Eliminar
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                <tr>
                                    <td colSpan={3}>Total:</td>
                                    <td>${cart.total.toFixed(2)}</td>
                                </tr>
                            </tbody>
                        </table>
                    )}
                    <button
                        onClick={handleCompraClick}
                        disabled={!isFormValid || cart.items.length === 0}
                        className={isFormValid ? 'btn-comprar botonCompra' : 'btn-disabled botonCompra'}
                    >
                        Comprar
                    </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Carrito;

