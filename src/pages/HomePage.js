import Header from "../components/ui/Header";
import "../assets/homepage.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <Header />
      <div className="home-wrapper">
        <div className="home-content">
          {/* <p className="clip-text">Style</p> */}
          <h1>Men's Fashion<span>Boutique</span></h1>
          <div className="img-content">
            <div id="image-fade"></div>
          </div>
        </div>
        <div className="season-promotions">
          <p>New Summer's Collection</p>
          <button onClick={()=>{navigate("/shop-catalog")}}>Go to Shop</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
