import logo from "../../../assets/images/logo.png"
import Cart from "../../Cart"
import { useCart } from "../../../hooks/useCart"
const Top = () => {
    const { getPrice } = useCart();

    return (
        <div className="top-header">
            <div className="logo">
                <img alt="no-logo" src={logo}/>
            </div>
            <Cart />
            ${getPrice()}.00
        </div>
    )
}

export default Top