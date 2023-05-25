import { createContext,useState } from "react";

// Crear Contexto
export const CartContext = createContext([])

// Crear Provider
export function CartProvider ({ children }){
    const [ cart, setCart ] = useState([]);

    const addToCart = (product) => {
        setCart([...cart,product])
    }

    const clearCart = (product) => {
        setCart([])
    }
    
    const getPrice = () => {
        return cart.reduce((acc,itemA)=>{
            return acc + itemA.price
        },0)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            getPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}