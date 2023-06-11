import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import carrito from "../imagenes/carrito3.png";


const ItemDetail = ({ orchids }) => {
    console.log(orchids)
    
    return (
        <Container>
            <div>
                <p>no andaaaaaaaaaaaaaaa</p>
            </div>
            {orchids.map((orchid) => (
                <div key={orchid.id}>
                    <Card className='card_header' style={{ width: '18rem' }}>
                        <Card.Img className='card_img' variant="top" src={orchid.img} />
                        <Card.Body>
                            <Card.Title>{orchid.nombre}</Card.Title>
                            <Card.Text>
                                {orchid.descripcion}
                            </Card.Text>
                            <Card.Text>
                                Categoría:&nbsp;<span className="category-label">{orchid.category}</span>
                            </Card.Text>
                            <Card.Text>
                                Stock:<span className="category-label">{orchid.stock}</span>
                            </Card.Text>
                            <Card.Text className='card_price'>
                                $&nbsp;{orchid.price}
                            </Card.Text>
                            <div>
                                <Button className='button_card' variant="primary">Agregar al carrito&nbsp;&nbsp;<img src={carrito} alt="Carrito" /></Button>
                                <Button className='button_card2' variant="primary">Comprar ahora &nbsp;&nbsp;<img src={carrito} alt="Carrito" /></Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </Container>
    );
};

export default ItemDetail;
