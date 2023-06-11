import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import Data from "../data.json"
import ItemList from './ItemList';

const ItemListContainer = () => {

    const { category } = useParams();
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

    const catFilter = Data.filter((orc) => orc.category === category)

    return (
        <>
            {category ? <ItemList orchid={catFilter} /> : <ItemList orchid={Data} />}
        </>
    );
};

export default ItemListContainer;

