import React, { createContext, useState } from "react";

export const CartContext = createContext(null);

const ShoppingCartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const { id, quantity } = item;
        const existingItem = cart.find((item) => item.id === id);

        if (existingItem) {
            setCart((prevCart) =>
                prevCart.map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity + quantity } : item
                )
            );
        } else {
            setCart((prevCart) => [...prevCart, item]);
        }
    };

    const removeFromCart = (itemId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export default ShoppingCartContextProvider;



