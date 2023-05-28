import { Link } from "react-router-dom"

const Bottom = () => {
    return (
        <div className="bottom-header">
            <Link to="/">Home</Link>
            <Link to="/shop-catalog">Shop</Link>
            <Link to="/contact-us">Contact Us</Link>
        </div>
    )
}

export default Bottom