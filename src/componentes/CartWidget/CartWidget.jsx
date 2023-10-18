import { Cart4 } from 'react-bootstrap-icons';
import { useCartContext, } from '../../context/CartContex';

const CartWidget = () =>{
    const { cart } = useCartContext();

    const totalItemsInCart = cart.items.reduce((total, item) => total + item.quantity, 0);

    return(<div><Cart4/><span>{totalItemsInCart}</span></div>);
}

export default CartWidget

