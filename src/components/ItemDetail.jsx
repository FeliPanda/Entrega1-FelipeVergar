import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import carrito from "../imagenes/carrito3.png";
import Contador from './Contador';

const ItemDetail = ({ orchids }) => {
    return (
        <div className="centered-content">
            <Container>
                {orchids.map((orchid) => (
                    <Card key={orchid.id} style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
                        <div style={{ flex: 2 }}>
                            <Card.Img style={{ height: '100%', objectFit: 'contain' }} variant="top" src={orchid.img} />
                        </div>
                        <div className='background_card' style={{ flex: 1, padding: '10px', alignItems:'center' }}>
                            <Card.Title className='detail_tittle'>{orchid.nombre}</Card.Title>
                            <Card.Text className='detail_text'>{orchid.descripcion}</Card.Text>
                            <Card.Text className='detail_text'>Categoría: <span style={{ fontWeight: 'bold' }}>{orchid.category}</span></Card.Text>
                            <Card.Text className='detail_text'>Stock: <span style={{ fontWeight: 'bold' }}>{orchid.stock}</span></Card.Text>
                            <Card.Text className='card_price detail_text'>$ {orchid.price.toLocaleString('de-DE')}</Card.Text>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom:'40px' }}>
                                <Contador
                                    id={orchid.id}
                                    name={orchid.nombre}
                                    price={orchid.price}
                                    stock={orchid.stock}
                                />
                                {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                    <Button className='button_card' variant="primary" style={{ marginBottom: '10px' }}>
                                        Agregar al carrito <img src={carrito} alt="Carrito" />
                                    </Button>
                                    <Button className='button_card2' variant="primary">
                                        Comprar ahora <img src={carrito} alt="Carrito" />
                                    </Button>
                                </div> */}
                            </div>
                        </div>
                    </Card>
                ))}
            </Container>
        </div>
    );
};

export default ItemDetail;






// import React from 'react';
// import { Container, Card, Button } from 'react-bootstrap';
// import carrito from "../imagenes/carrito3.png";
// import Contador from './Contador';

// const ItemDetail = ({ orchids }) => {
//     return (
//         <div className="centered-content">
//             <Container>
//                 {orchids.map((orchid) => (
//                     <Card key={orchid.id} style={{ display: 'flex', flexDirection: 'row', marginBottom: '20px' }}>
//                         <div style={{ flex: 2 }}>
//                             <Card.Img style={{ height: '100%', objectFit: 'contain' }} variant="top" src={orchid.img} />
//                         </div>
//                         <div className='background_card' style={{ flex: 1, padding: '10px', alignItems:'center' }}>
//                             <Card.Title className='detail_tittle'>{orchid.nombre}</Card.Title>
//                             <Card.Text className='detail_text'>{orchid.descripcion}</Card.Text>
//                             <Card.Text className='detail_text'>Categoría: <span style={{ fontWeight: 'bold' }}>{orchid.category}</span></Card.Text>
//                             <Card.Text className='detail_text'>Stock: <span style={{ fontWeight: 'bold' }}>{orchid.stock}</span></Card.Text>
//                             <Card.Text className='card_price detail_text'>$ {orchid.price.toLocaleString('de-DE')}</Card.Text>
//                             <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom:'40px' }}>
//                             <Contador />    
//                             </div>
                            
//                             {/* <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//                                 <Button className='button_card' variant="primary" style={{ marginBottom: '10px' }}>
//                                     Agregar al carrito <img src={carrito} alt="Carrito" />
//                                 </Button>
//                                 <Button className='button_card2' variant="primary">
//                                     Comprar ahora <img src={carrito} alt="Carrito" />
//                                 </Button>
//                             </div> */}
//                         </div>
//                     </Card>
//                 ))}
//             </Container>
//         </div>
//     );
// };

// export default ItemDetail;
