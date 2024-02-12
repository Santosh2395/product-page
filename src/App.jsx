import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./components/Cards";
import { Carousel } from "./components/Carousel";
import Products from "./components/Products";
import { slides } from "./data/carouselData.json";
import "./components/Carousel.css";

function App() {
  return (
    <div className="App">
      <div className="carousel-container">
        <Carousel data={slides} />
      </div>
      <Cards />
      <Products />
    </div>
  );
}

export default App;
