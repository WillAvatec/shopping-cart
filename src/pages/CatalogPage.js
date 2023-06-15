import "../assets/card.css"
import "../assets/catalog.css"
import Header from "../components/ui/Header";
import Card from "../components/Card";
import mockData from "../mocks/products.json"

function CatalogPage() {
  
  return (
      <div className="home">
        <Header />
        <div id="cards-container">
          {mockData.map(product =>(            
              <Card
                key={product.title}
                product={product}
              />
          ))}
        </div>
      </div>
  );
}

export default CatalogPage