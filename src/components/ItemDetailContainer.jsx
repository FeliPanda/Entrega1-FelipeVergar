import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from './firebase/firebaseConfig';
import { collection, query, getDocs, where, documentId } from 'firebase/firestore';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [orchid, setOrchid] = useState(null);

    useEffect(() => {
        const getOrchid = async () => {
            const q = query(collection(db, 'orquideas'), where(documentId(), '==', id));
            const docs = [];
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
            });
            setOrchid(docs[0]);
        };
        getOrchid();
    }, [id]);

    return (
        <div>
            {orchid && <ItemDetail orchid={orchid} />}
        </div>
    );
};

export default ItemDetailContainer;
