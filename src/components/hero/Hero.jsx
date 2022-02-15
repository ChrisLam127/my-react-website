import "./hero.css";
import { Link } from "react-router-dom";
function Hero({ image, heading, desc1, desc2, span, price }) {
  return (
    <>
      <div className="mainhero">
        <div className="heroContainer">
          <div className="overlay"></div>
          <img src={image} alt="images" className="image" />

          <div id="pages">
            <h1>
              {heading} <span>{span}</span>
            </h1>
            <p>{desc1}</p>
            <p>
              {desc2}
              <span className="quote">{price}</span>
            </p>
            <Link to="./contact" className="quote">
              GET A QUOTE!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
