import { useParams } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import Header from "../components/ui/Header";
import Tabs from "../components/Tabs";
import products from "../mocks/products.json";
import "../assets/productPage.css";
import { useRef } from "react";

function ProductPage() {
  const quantity = useRef(1);
  const { id } = useParams();
  const productMock = products.find((item) => item.title === id);
  const { title, images, price, description, stock } = productMock;
  const { addToCart } = useCart();
  return (
    <div className="home">
      <Header />
      <div className="main__wrapper">
        <main>
          <section className="product__image">
            <picture>
              <img alt={title} src={images[0]} />
            </picture>
          </section>
          <section className="product__def">
            <section className="product__def--info">
              <div className="product__def--name">{title}</div>
              <p>
                Availability{" "}
                {stock > 0 ? `(In Stock[${stock}])` : "Out of stock"}
              </p>
            </section>
            <div className="product__def--price">
              <span>${price}.99</span>
            </div>
            <Tabs info={description} />
            <div className="product__page--btns-container">
              <input ref={quantity} type="number" min={1} defaultValue={1} />
              <br />
              <br />
              <button
                onClick={() => {
                  const value = quantity.current.value;
                  addToCart(productMock, Number(value));
                }}
              >
                Add to Cart
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default ProductPage;
