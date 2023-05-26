import { createContext,useState } from "react";

// Crear Contexto
export const CartContext = createContext([])

// Crear Provider
export function CartProvider ({ children }){
    const [ cart, setCart ] = useState([]);
    const [ total, setTotal] = useState(0);

    const addToCart = async (product) => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id);
        if(productInCartIndex >= 0){
            const newCart = structuredClone(cart);
            newCart[productInCartIndex].quantity += 1;
            setCart(newCart);            
        }else {
            setCart(prevState=>([
                ...prevState,
                {
                  ...product,
                  quantity:1
                }
            ]))
        }
        setTotal(prevTotal => prevTotal+product.price)
    }

    const clearCart = () => {
        setCart([]);
        setTotal(0);
    }
    
    const deleteFromCart = (product) => {
        const productIndex = cart.findIndex(item=>item.id===product.id)
        const newCart = structuredClone(cart);
        const item = newCart[productIndex];
        // Reduce quantity
        item.quantity -= 1;

        //Remove item from cart
        if(item.quantity <= 0) {    
            newCart.splice(productIndex,1);
        }
        setCart(newCart);
        setTotal(prevState=> prevState - item.price)
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            total,
            deleteFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}