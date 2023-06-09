import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import carrito from "../imagenes/carrito3.png";



const Item = ({ id, name, descripcion, price, img, stock, category }) => {
    const formattedPrice = price.toLocaleString('de-DE');
    return (
        <section id="cards" >
            
            <Card className='card_header' style={{ width: '18rem' }}>
                <Card.Img className='card_img' variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <Card.Text className='card_price'>
                        $&nbsp;{formattedPrice} 
                    </Card.Text>
                    <div>
                        <Button className='button_card' variant="primary">Agregar al carrito&nbsp;&nbsp;<img src={carrito} alt="Carrito" /></Button>
                        <Button className='button_card2' variant="primary">Comprar ahora &nbsp;&nbsp;<img src={carrito} alt="Carrito" /></Button>
                    </div>
                    
                </Card.Body>
            </Card>
        </section>
    )
}

export default Item