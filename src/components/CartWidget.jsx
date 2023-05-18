import React from 'react'
import carrito from "../imagenes/carrito.png";
const CartWidget = () => {
    return (
    <div>
        <div className='container_carrito'> 
            <button className='carrito'>
            <img src={carrito}  alt="carrito de compras" />
            <h3 className='num_carrito'>5</h3>
            </button>
        </div>
    </div>
    ) 
}

export default CartWidget