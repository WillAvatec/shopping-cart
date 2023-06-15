import Header from "../components/ui/Header"
import { useParams } from "react-router-dom"
import products from "../mocks/products.json"
import "../assets/productPage.css"
import Tabs from "../components/Tabs";
import Input from "../components/Input";

function ProductPage () {
    const {id} = useParams();
    const {title,images,price,description,stock} =products.find(item => item.title === id)
    return (
        <div className="home">
            <Header/>
            <div className="main__wrapper">
                <main>
                    <section className="product__image">
                        <picture>
                            <img alt={title} src={images[0]}/>
                        </picture>
                    </section>
                    <section className="product__def">
                        <section className="product__def--info">
                            <div className="product__def--name">
                                {title}
                            </div>
                            <p>Availability {
                                stock > 0
                                 ? `(In Stock[${stock}])`
                                 : "Out of stock"
                                }</p>
                        </section>
                        <div className="product__def--price">
                            <span>${price}.99</span>
                        </div>
                        <Tabs info={description}/>
                        <div className="product__page--btns-container">
                            <Input />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default ProductPage