import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import carrito from '../imagenes/carrito3.png';
import { CartContext } from '../context/ShoppingCartContext';
import Swal from 'sweetalert2';

const Contador = ({ orchid }) => {
    const [contador, setContador] = useState(1);
    const { addToCart } = useContext(CartContext);
    const avalaibleStock = orchid.stock;

    const sumar = () => {
        if (contador < avalaibleStock) {
            setContador((prevContador) => prevContador + 1);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No puedes superar el límite de stock!',
            });
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador((prevContador) => prevContador - 1);
        }
    };

    const handleAddToCart = () => {
        const { id, nombre, price, img } = orchid;
        const item = { id, name: nombre, price, img, quantity: contador };
        addToCart(item);
    };

    return (
        <div>
            <div>
                <h2
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        paddingLeft: '25px',
                    }}
                >
                    {contador}
                </h2>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '40px' }}>
                <button className="contador1" onClick={restar}>
                    -
                </button>
                <button className="contador1" onClick={sumar}>
                    +
                </button>
            </div>
            <div style={{ display: 'flex' }}>
                <Button className="button_card3" onClick={handleAddToCart}>
                    Agregar al carrito <img src={carrito} alt="Carrito" />
                </Button>
            </div>
        </div>
    );
};

export default Contador;
