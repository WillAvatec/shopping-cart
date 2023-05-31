import Back from '../assets/images/logo.png'
import { useCart } from '../hooks/useCart'
import { Link } from 'react-router-dom'

const Card = ({title,price,image,product}) => {
    const { addToCart } = useCart()

    return (
        <div className="card" >
            <div className="img-container">
                <img className="front-card-img" alt={`product${title}`} src={image}/>
                <img className="back-card-img" alt={`product`} src={Back} />
            </div>
            <div className="def-container">
            <Link key={title+price} to={`./${title}`}>
                <div className="card-title">{title}</div>
            </Link>
                {/*<div className="card-description">{description}</div>*/ }
                <div className="card-price">${price}</div>
            </div>
            <div className='btn-container'>
                <button onClick={()=>{addToCart(product)}}>Add to Cart</button>
            </div>
        </div>
    )
}

export default Card