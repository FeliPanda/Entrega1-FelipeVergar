import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Data from "../data.json"
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const {  id } = useParams();
    const [orchids, setOrchids] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(Data);
                const data = await response.json();
                setOrchids(data);
            } catch (error) {
                console.log(error);
                setError('Error al obtener los datos.');
            }
        }
        fetchData();
    }, []);

    const orchFilter = orchids.filter((orc) => orc.id === id)

    return <ItemDetail orchids={orchFilter} />;

}

export default ItemDetailContainer

