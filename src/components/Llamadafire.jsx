import React, { useEffect, useState } from 'react';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

const FirebaseData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getFirestore();
                const oneItem = doc(db, 'orquideas', '1'); // Reemplaza '1' con el ID que deseas obtener
                const snapshot = await getDoc(oneItem);
                if (snapshot.exists()) {
                    const itemData = snapshot.data();
                    setData(itemData);
                }
            } catch (error) {
                console.log('Error:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {data ? (
                <div>
                    <h1>{data.nombre}</h1>
                    <p>{data.descripcion}</p>
                    {/* Mostrar el resto de los datos en la estructura que desees */}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
};

export default FirebaseData;
