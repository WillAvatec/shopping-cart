import { Link } from "react-router-dom"
import {ReactComponent as ReactLogo} from '../../assets/images/logo.svg';
import "../../assets/header.css";

function Header (){
    return (
        <header>
            <div id="logo__container">
            <Link to="/">
                <ReactLogo />
            </Link>
            </div>
            <nav>
                <ul>
                    <li><Link to="/our-story">Our History</Link></li>
                    <li><Link to="/shop-catalog">Shop</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </nav>
            <div className="cart-buttons">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </header>
    )
}

export default Header