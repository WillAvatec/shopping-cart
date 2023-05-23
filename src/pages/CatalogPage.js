import { useState, useEffect } from "react"
import Header from "../components/ui/Header/Header";
import Card from "../components/card/Card";
import "../assets/card.css"
import "../assets/catalog.css"

const ENDPOINT_CATEGORY = "men's clothing"

function CatalogPage() {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    if(!products.length){
      fetch(`https://fakestoreapi.com/products/category/${ENDPOINT_CATEGORY}`)
            .then(res=>res.json())
            .then(json=>setProducts(json))
    }
  },[products])

  return (
    <div className="home">
      <Header />
      <div id="cards-container">
        {products.length
          ? products.map(product => {
            return (
              <Card 
                image={product.image} 
                title={product.title}
                description={product.description}
                price={product.price} 
              />
            )
          })
          : null
        }
      </div>
    </div>
  );
}

export default CatalogPage