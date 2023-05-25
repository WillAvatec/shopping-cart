import { useState,useContext } from "react";
import shopCart from "../assets/images/shop-cart.svg"
import "../assets/aside.css"
import {useCart} from "../hooks/useCart"

function Cart () {
    const [active, setActive] = useState(false);
    const {cart:products, clearCart } = useCart();
    const handleClick = () => {
        setActive(!active)
    }
    return (
        <div>
            <img onClick={handleClick} className="svgCart" alt="bag icon" src={shopCart}/>
            {active && (
                <aside>
                    <h3>Your shopping Bag</h3>
                    <div id="inventory">
                        {products?.map(product=>(
                            <div id={product.id}>
                                <img alt={product.title} src={product.thumbnail}/>
                                <div className="cart-btns">
                                    <button>+</button>
                                    <input type="number" value={1}/>
                                    <button>-</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={()=>{clearCart()}}>Clear Cart</button>
                </aside>

            )}
        </div>
    )
}

export default Cart