import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ShoppingCartContext';
import carrito from "../imagenes/carrito3.png";

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className='container_carrito'>
            <Link to='/cart' className='carrito'>
                <img src={carrito} alt='carrito de compras' />
                {totalItems > 0 && <h3 className='num_carrito'>{totalItems}</h3>}
            </Link>
        </div>
    );
};

export default CartWidget;
