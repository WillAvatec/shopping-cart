import { useState,useContext } from "react";
import shopCart from "../assets/images/shop-cart.svg"
import "../assets/aside.css"
import {useCart} from "../hooks/useCart"

function Cart () {
    const [ active, setActive ] = useState(false);
    const { cart, clearCart,addToCart,deleteFromCart,total } = useCart();
    const renderAside = () => {
        setActive(!active)
    }

    return (
        <div>
            <img onClick={renderAside} className="svgCart" alt="bag icon" src={shopCart}/>
            {active && (
                <aside>
                    <div id="cart__wrapper">
                        <h3 className="cart__title">Your shopping Bag</h3>
                        <ul id="cart-inventory">
                            {cart?.map(product=>(
                                <CartItem
                                    key={product.id}
                                    {...product}
                                    add={()=>addToCart(product)}
                                    decrease={()=>deleteFromCart(product)}
                                />
                            ))}
                        </ul>
                        <button onClick={()=>{clearCart()}}>Clear Cart</button>
                    </div>
                    <footer> Your subtotal: $<span>{total}</span></footer>
                </aside>
            )}
        </div>
    )
}

function CartItem ({title,add,decrease,quantity,thumbnail,category,price}) {

    return(
        <li className="cart-item">
            <img className="cart__item--img" alt={title} src={thumbnail}/>
            <div className="cart__item--details">
                <div className="cart__item--category">
                    {category}
                </div>
                <div className="cart__item--name">
                    {title}
                </div>
                <div className="cart__item--btns">
                    <button onClick={add}>+</button>
                    <input type="number" value={quantity}/>
                    <button onClick={decrease} >-</button>
                </div>            
            </div>
            <div className="cart__item--price">
               ${price}
            </div>
        </li>
    )
}


export default Cart