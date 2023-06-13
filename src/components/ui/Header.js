import { Link } from "react-router-dom";
import Cart from "../Cart";
import {ReactComponent as ReactLogo} from '../../assets/images/logo.svg';
import {ReactComponent as SearchSvg} from '../../assets/images/search.svg';
import {ReactComponent as UserSvg} from '../../assets/images/user.svg';
import { ReactComponent as MenuSvg } from "../../assets/images/burger-menu-svgrepo-com.svg";
import { useState } from "react";
import "../../assets/header.css";

function Header () {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <header>
            <div id="logo__container">
                <Link to="/">
                    <ReactLogo />
                </Link>
            </div>        
            <MenuSvg  id="mobile-button" onClick={()=>{setToggleMenu(!toggleMenu)}}/>
            <nav>
                <ul className={toggleMenu ? "active" : ""}  id="links-container">
                    <li><Link to="/our-story">Our Story</Link></li>
                    <li><Link to="/shop-catalog">Shop</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </nav>
            <div className="cart-buttons">
                <ul>
                    <li id="js-search-icon"> <SearchSvg/> </li>
                    <li id="js-cart-icon"> <Cart/> </li>
                    <li id="js-user-icon"> <UserSvg/> </li>
                </ul>
            </div>
        </header>
    )
}

export default Header