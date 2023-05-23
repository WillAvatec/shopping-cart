import Back from '../../assets/images/logo.png'

const Card = ({title,price,description,image}) => {

    return (
        <div className="card" >
            <div className="img-container">
                <img className="front-card-img" alt={`product${title.split(' ',0).join()}`} src={image}/>
                <img className="back-card-img" alt={`product`} src={Back} />
            </div>
            <div className="def-container">
                <div className="card-title">{title}</div>
                {/*<div className="card-description">{description}</div>*/ }
                <div className="card-price">${price}</div>
            </div>
        </div>
    )
}

export default Card