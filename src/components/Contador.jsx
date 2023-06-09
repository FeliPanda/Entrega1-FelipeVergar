import React from 'react'
import { useState } from 'react'


const Contador = () => {
    const [contador, setContador] = useState(0);
    const sumar = () => {
        setContador(contador + 1);
    };
    return (
        <div>
            <p>{contador}</p>
            <button onClick={sumar}>+</button>
            <button onClick={() => {
                setContador(contador - 1)
            }}>-</button>
            <button onClick={() => {
                setContador(0)
            }}>Reset</button>
        </div>
    )
}

export default Contador