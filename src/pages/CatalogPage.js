import "../assets/card.css"
import "../assets/catalog.css"
import Header from "../components/ui/Header/Header";
import Card from "../components/Card";
import mockData from "../mocks/products.json"
import { CartProvider } from "../context/cart";


function CatalogPage() {

  return (
    <CartProvider>
      <div className="home">
        <Header />
        <div id="cards-container">
          {mockData.map(product => {
              return (
                <Card
                  key={product.id}
                  image={product.thumbnail} 
                  title={product.title}
                  price={product.price}
                  product={product}
                />
              )
            })
          }
        </div>
      </div>
    </CartProvider>
  );
}

export default CatalogPage