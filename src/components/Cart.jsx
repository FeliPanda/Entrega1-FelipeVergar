import React, { useContext, useEffect, useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { CartContext } from '../context/ShoppingCartContext';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(cart);
    }, [cart]);

    const handleDelete = (itemId) => {
        removeFromCart(itemId);
    };

    return (
        <div className="centered-content">
            <Container>
                <div>
                    <h1 className="main_text">Carrito de compra</h1>
                </div>
                {cartItems.length === 0 ? (
                    <p>Su carrito está vacío</p>
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
            </Container>
        </div>
    );
};

export default Cart;
