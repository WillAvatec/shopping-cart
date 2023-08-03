import { Link } from "react-router-dom";

const Card = ({ product }) => {
  /* const { addToCart } = useCart(); */
  const { title, price, images, brand } = product;
  return (
    <article className="card">
      <div className="img-container">
        <Link to={`./${title}`}>
          <img
            className="front-card-img"
            alt={`product${title}`}
            src={images[0]}
          />
        </Link>
      </div>

      <div className="def-container">
        <p className="def-brand">{brand}</p>

        <Link className="def-title" to={`./${title}`}>
          {title}
        </Link>
        <p className="def-price">USD {price}</p>
      </div>

      {/*This was the previous approach to change url
                <div className='btn-container'>
                    <button onClick={()=>{addToCart(product)}}>Add to Cart</button>
                </div>
            */}
    </article>
  );
};

export default Card;
