import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from '../context/ShoppingCartContext';
import carrito from "../imagenes/carrito3.png";
import { Link } from 'react-router-dom';

const Item = ({ id, name, descripcion, price, img, stock, category }) => {
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const item = { id, name, price, img, quantity: 1 };
        addToCart(item);
    };

    const formattedPrice = price.toLocaleString('de-DE');

    return (
        <section id="cards">
            <div key={id}>
                <Card className='card_header' style={{ width: '18rem' }}>
                    <Link to={`/item/${id}`}>
                        <Card.Img className='card_img' variant="top" src={img} />
                    </Link>
                    <Card.Body>
                        <Card.Title className='item_title'>{name}</Card.Title>
                        <Card.Text className='item_text'>
                            {descripcion}
                        </Card.Text>
                        <Card.Text className='item_text'>
                            Categoría: {category}
                        </Card.Text>
                        <Card.Text className='card_price item_text'>
                            $ {formattedPrice}
                        </Card.Text>
                        <div className='pad_carrito'>
                            <Button className='button_card' variant="primary" onClick={handleAddToCart}>
                                Agregar al carrito&nbsp;&nbsp;
                                <img src={carrito} alt="Carrito" />
                            </Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </section>
    );
}

export default Item;
