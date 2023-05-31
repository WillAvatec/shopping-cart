import "../assets/card.css"
import "../assets/catalog.css"
import Header from "../components/ui/Header/Header";
import Card from "../components/Card";
import mockData from "../mocks/products.json"

function CatalogPage() {
  
  return (
      <div className="home">
        <Header />
        <div id="cards-container">
          {mockData.map(product =>(            
              <Card
              image={product.images[0]} 
              title={product.title}
              price={product.price}
              product={product}
              />
          ))}
        </div>
      </div>
  );
}

export default CatalogPage