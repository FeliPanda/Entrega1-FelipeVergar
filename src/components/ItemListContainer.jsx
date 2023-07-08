import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../data.json';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const { category } = useParams();
    const [orchids, setOrchids] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        let filteredData = Data;

        if (category) {
            filteredData = Data.filter((orchid) => orchid.category === category);
        }

        setOrchids(filteredData);
    }, [category]);

    return (
        <>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <ItemList orchid={orchids} />
            )}
        </>
    );
};

export default ItemListContainer;
