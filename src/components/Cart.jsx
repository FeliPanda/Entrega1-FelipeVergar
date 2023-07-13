import React, { useContext, useEffect, useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link desde React Router si lo estás utilizando
import { CartContext } from '../context/ShoppingCartContext';
import Form from './Form';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        setCartItems(cart);
        calculateTotalPrice(cart);
    }, [cart]);

    const handleDelete = (itemId) => {
        removeFromCart(itemId);
    };

    const calculateTotalPrice = (cartItems) => {
        let total = 0;
        cartItems.forEach((item) => {
            total += item.quantity * item.price;
        });
        setTotalPrice(total);
    };

    return (
        <div className="centered-content">
            <Container>
                <div>
                    <h1 className="main_text">Carrito de compra</h1>
                </div>
                {cartItems.length === 0 ? (
                    <>
                        <p>Su carrito está vacío</p>
                        <Button variant="primary" as={Link} to="/">Ir a la página de inicio</Button> {/* Utiliza Link para generar el enlace */}
                        {/* <a href="/">Ir a la página de inicio</a> */} {/* Utiliza un enlace <a> si no estás utilizando React Router */}
                    </>
                ) : (
                    <Row>
                        {cartItems.map((item) => (
                            <Col key={item.id} sm={6} md={4} lg={3}>
                                <Card>
                                    <Card.Img variant="top" src={item.img} />
                                    <Card.Body>
                                        <Card.Title>{item.name}</Card.Title>
                                        <Card.Text>
                                            <p>Precio por unidad: ${item.price} </p>
                                            <p>Cantidad: {item.quantity}</p>
                                            <p>Precio total: {item.quantity * item.price}</p>
                                        </Card.Text>
                                        <Button className="button_card3"
                                            variant="primary"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Eliminar del carrito
                                        </Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                )}
                {cartItems.length > 0 && (
                    <>
                        <p>Precio total de los productos: ${totalPrice}</p>
                        <Form />
                    </>
                )}
            </Container>
        </div>
    );
};

export default Cart;
