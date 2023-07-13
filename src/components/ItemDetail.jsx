import React from 'react';
import { Container, Card } from 'react-bootstrap';
import Contador from './Contador';

const ItemDetail = ({ orchid }) => {
    return (
        <div className="centered-content">
            <Container>
                <Card style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
                    <div style={{ flex: 2 }}>
                        <Card.Img style={{ height: '100%', objectFit: 'contain' }} variant="top" src={orchid.img} />
                    </div>
                    <div className='background_card' style={{ flex: 1, padding: '10px', alignItems: 'center' }}>
                        <Card.Title className='detail_title'>{orchid.nombre}</Card.Title>
                        <Card.Text className='detail_text'>{orchid.descripcion}</Card.Text>
                        <Card.Text className='detail_text'>Categoría: <span style={{ fontWeight: 'bold' }}>{orchid.category}</span></Card.Text>
                        <Card.Text className='detail_text'>Stock: <span style={{ fontWeight: 'bold' }}>{orchid.stock}</span></Card.Text>
                        <Card.Text className='card_price detail_text'>$ {orchid.price}</Card.Text>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom: '40px' }}>
                            <Contador
                                orchid={orchid}
                            />
                        </div>
                    </div>
                </Card>
            </Container>
        </div>
    );
};

export default ItemDetail;
