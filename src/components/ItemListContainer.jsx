import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const { category } = useParams();
    const [orchids, setOrchids] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getOrchids = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'orquideas'));
                const docs = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
                setOrchids(docs);
            } catch (error) {
                setError(error.message);
            }
        };

        getOrchids();
    }, []);

    const filteredOrchids = category ? orchids.filter((orchid) => orchid.category === category) : orchids;

    return (
        <>
            {error ? <p>Error: {error}</p> : <ItemList orchids={filteredOrchids} />}
        </>
    );
};

export default ItemListContainer;
