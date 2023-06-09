import React from 'react'
import data from "../data.json"
import ItemList from './ItemList';

const ItemListContainer = () => {
    const getData = () =>{
        return new Promise ((resolve, reject)=>{
            if (data.length ===0){
                reject(new Error("no data"))
            }
            setTimeout(()=> {
                resolve (data);
            },2000);
        });
    };
    
    async function fetchingData(){
        try{
            const dataFetched = await getData();
        }catch (err){
            console.log(err.message);
        }
    }

    fetchingData();

    return (
        <>  
            <ItemList orchid={data} />
        </>
    );
};

export default ItemListContainer;