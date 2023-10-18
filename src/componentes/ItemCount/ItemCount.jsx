import { useState } from "react";
import { useCartContext } from "../../context/CartContex";

const ItemCount = ({ onAdd, initial, stock, productId }) => {
    const { cart } = useCartContext();
    const currentItemInCart = cart.items.find((item) => item.id === productId);

    const [qty, setQty] = useState(currentItemInCart ? currentItemInCart.quantity : initial);

    const addProduct = (num) => {
        const newQty = qty + num;

        if (newQty >= 0 && newQty <= stock) {
            setQty(newQty);
        }
    };

    return (
        <div className="count-container">
            <div className="count-container__contador">
                <button
                    className="count-container__button"
                    onClick={() => addProduct(-1)}
                    disabled={qty === initial}
                >
                    -
                </button>
                <span className="count-container__qty">{qty}</span>
                <button
                    className="count-container__button"
                    onClick={() => addProduct(1)}
                    disabled={qty === stock}
                >
                    +
                </button>
            </div>
            <button
                className="button-primary"
                onClick={() => {
                    onAdd(qty); 
                }}
                disabled={stock === 0 ? true : null}
            >
                Añadir
            </button>
        </div>
    );
};

export default ItemCount;

