import React from 'react'
import { useState, useEffect } from 'react'
import Data from "../data.json"


const Contador = () => {
    const { id } = useParams();
    const [contador, setContador] = useState(1);
    const [orchids, setOrchids] = useState(0);
    const [error, setError] = useState(null);

    const avalaibleStock = Data.stock;

    const sumar = () => {
        setContador(contador + 1);
    };

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(Data);
                const data = await response.json();
                setOrchids(data);
            }
            catch (error) {
                setError('Error al obtener los datos.');
            }
        }
        fetchData();
    }, []);

    




    return (
        <div>
            <div>
                <h2 style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingLeft: '25px' }}>{contador}</h2>
            </div>
            <button className='contador1' onClick={() => {
                setContador(contador - 1)
            }}>-</button>
            <button className='contador1' onClick={sumar}>+</button>

            {/* <button onClick={() => {
                setContador(0)
            }}>Reset</button> */}
        </div>
    )
}

export default Contador