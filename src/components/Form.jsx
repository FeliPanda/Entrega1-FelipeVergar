import {useState, useEffect } from "react";
import React from 'react'

const Form = () => {

    const [email,setEmail] = useState('');


    const handleSubmit = (e)=>{
        e.preventDefault();
        if (email){
            alert("ha ingreaso correctamente su mierda")
        } else{ 
            alert('no puede quedar vacio')
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="Email">Ingrese Email</label>
                <input type="text" placeholder="Email" id="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <button type="submit">Enviar info</button>
            </form>
        </>
    )
}

export default Form