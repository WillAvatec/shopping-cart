import { useState } from "react";
import { ReactComponent as CartSvg } from "../assets/images/cart.svg";
import { useCart } from "../hooks/useCart";
import "../assets/aside.css";

function Cart() {
  const [active, setActive] = useState(false);
  const { cart, clearCart, addToCart, deleteFromCart, total } = useCart();
  const renderAside = () => {
    setActive(!active);
  };

  return (
    <div>
      <CartSvg onClick={renderAside} />
      <aside className={active ? "visible" : ""}>
        <button id="close-btn" onClick={() => setActive(false)}>
          &#10006;
        </button>
        <div id="cart__wrapper">
          <h3 className="cart__title">Your shopping Bag</h3>
          <ul id="cart-inventory">
            {cart?.map((product) => (
              <CartItem
                key={product.id}
                {...product}
                add={() => addToCart(product)}
                decrease={() => deleteFromCart(product)}
              />
            ))}
          </ul>
          <div className="aside-footer">
            <button
              className="clear-btn"
              onClick={() => {
                clearCart();
              }}
            >
              Clear Cart
            </button>
            <p>
              Your subtotal: <span>${total}</span>
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}

function CartItem({
  title,
  add,
  decrease,
  quantity,
  thumbnail,
  category,
  price,
}) {
  return (
    <li className="cart-item">
      <img className="cart__item--img" alt={title} src={thumbnail} />
      <div className="cart__item--details">
        <div className="cart__item--category">{category}</div>
        <div className="cart__item--name">{title}</div>
        <div className="cart__item--btns">
          <button onClick={add}>+</button>
          <caption>{quantity}</caption>
          <button onClick={decrease}>-</button>
        </div>
      </div>
      <div className="cart__item--price">${price}</div>
    </li>
  );
}

export default Cart;
