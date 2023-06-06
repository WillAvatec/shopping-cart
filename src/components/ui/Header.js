import { Link } from "react-router-dom"
import {ReactComponent as ReactLogo} from '../../assets/images/logo.svg';
import {ReactComponent as CartSvg} from '../../assets/images/cart.svg';
import {ReactComponent as SearchSvg} from '../../assets/images/search.svg';
import {ReactComponent as UserSvg} from '../../assets/images/user.svg';
import { ReactComponent as MenuSvg } from "../../assets/images/burger-menu-svgrepo-com.svg";
import { useState } from "react";
import "../../assets/header.css";

function Header (){
    const [toggle, setToggle] = useState(true) ;
    return (
        <header>
            <div id="logo__container">
                <Link to="/">
                    <ReactLogo />
                </Link>
            </div>        
            <MenuSvg  id="mobile-button" onClick={()=>{setToggle(!toggle)}}/>
            <nav>
                <ul className={toggle ? "active" : ""}  id="links-container">
                    <li><Link to="/our-story">Our Story</Link></li>
                    <li><Link to="/shop-catalog">Shop</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </nav>
            <div className="cart-buttons">
                <ul>
                    <li id="js-search-icon"> <SearchSvg/> </li>
                    <li id="js-cart-icon"> <CartSvg/> </li>
                    <li id="js-user-icon"> <UserSvg/> </li>
                </ul>
            </div>
        </header>
    )
}

export default Header