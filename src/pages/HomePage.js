import Header from "../components/ui/Header";
import "../assets/homepage.css";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home">
      <Header />
      <div className="home-wrapper">
        <div className="home-content">
          <h1>Men's Fashion<span>Boutique</span></h1>
          <div className="img-content">
            <div id="image-fade"></div>
          </div>
        </div>
        <div className="season-promotions">
          <p>New Summer's Collection</p>
          <Link to="/shop-catalog"><button>Buy Now</button></Link>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
