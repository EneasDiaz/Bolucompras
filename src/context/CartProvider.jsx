import { useState } from "react";
import { CartContext } from "./CartContex";

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [], total: 0 });

    const addToCart = (producto) => {
        const existingIndex = cart.items.findIndex((item) => item.id === producto.id);

        if (existingIndex !== -1) {
            const updatedItems = [...cart.items];
            updatedItems.splice(existingIndex, 1);
            const newTotal = updatedItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);
            setCart({
                items: updatedItems,
                total: newTotal,
            });
        }

        setCart((prevCart) => {
            const updatedItems = [...prevCart.items, producto];
            const total = updatedItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);
            return { items: updatedItems, total };
        });
    };

    const removeFromCart = (product) => {
        setCart((prevCart) => {
            const updatedItems = prevCart.items.filter((item) => item.id !== product.id);
            const total = updatedItems.reduce((acc, item) => acc + item.precio * item.quantity, 0);
            return { items: updatedItems, total };
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};



export default CartProvider;

