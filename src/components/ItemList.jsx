import React from 'react';
import Item from './Item';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const ItemList = ({ orchids, category }) => {
    const filteredOrchids = category ? orchids.filter((orchid) => orchid.category === category) : orchids;

    return (
        <Container>
            <div>
                <h1 className='main_text'> Compras especiales</h1>
                <p className='main_p'>Descubre flores y plantas para regalar o decorar</p>
            </div>
            <Row>
                {filteredOrchids.length === 0 ? (
                    <Col>
                        <p>No hay productos disponibles en esta categoría.</p>
                    </Col>
                ) : (
                    filteredOrchids.map((orchid) => (
                        <Col key={orchid.id} sm={6} md={4} lg={3}>
                            <Item
                                id={orchid.id}
                                name={orchid.nombre}
                                descripcion={orchid.descripcion}
                                price={orchid.price}
                                img={orchid.img}
                                stock={orchid.stock}
                                category={orchid.category}
                            />
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default ItemList;
