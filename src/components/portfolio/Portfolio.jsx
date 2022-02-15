import "./portfolio.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { portfolioData } from "./portfolioData";
import p21 from "../../images/p21.jpg";
import p15 from "../../images/p15.jpg";
import p22 from "../../images/p22.jpg";
import p16 from "../../images/p16.jpg";
import p23 from "../../images/p23.jpg";
import p24 from "../../images/p24.jpg";
import img6 from "../../images/p18.jpg";
import img7 from "../../images/p25.jpg";
import img8 from "../../images/p26.jpg";
import img9 from "../../images/p21.jpg";
import img10 from "../../images/p10.jpg";
import img11 from "../../images/p5.jpg";
import img12 from "../../images/p9.jpg";
import img13 from "../../images/p20.jpg";
import img15 from "../../images/p16.jpg";

function Portfolio() {
  const [images, setImages] = useState(portfolioData);
  return (
    <section className="styles-section">
      <div className="style">
        <div className="style-item">
          <i className="fab fa-internet-explorer"></i>
          <h4>WEB DESIGN</h4>
          <p>
            Simple but very stylished basic Price starting at
            <span>R 1800</span> .
          </p>
          <div className="portfolioOverlay">
            <i className="fab fa-internet-explorer"></i>
            <Link className="overlay-btn" to="./contact">
              GET A QUOTE
            </Link>
          </div>
        </div>
        <div className="style-item">
          <i className="fab fa-aws"></i>
          <h4>WEB HOSTING</h4>
          <p>
            Keep you business online for as little as <span>R 32</span>
            /month
          </p>
          <div className="portfolioOverlay">
            <i className="fab fa-aws"></i>
            <Link className="overlay-btn" to="./contact">
              GET A QUOTE
            </Link>
          </div>
        </div>
        <div className="style-item">
          <i className="fas fa-ad"></i>
          <h4>ADVERTISEMENT</h4>
          <p>To be noticed online you have to advertise your site.</p>
          <div className="portfolioOverlay">
            <i className="fas fa-ad"></i>
            <Link className="overlay-btn" to="./contact">
              GET A QUOTE
            </Link>
          </div>
        </div>
        <div className="shadow"></div>
      </div>
      <div className="gallery">
        <div className="slide-track">
          {images.map((item) => {
            return (
              <Link to="./gallery" className="gall">
                <img src="./images/Capture 01.JPG" alt="styles" />
              </Link>
            );
          })}

          <Link to="./gallery" className="gall">
            <img src={p21} alt="styles" />
          </Link>
          <Link to="./gallery" className="gall">
            <img src={p15} alt="" />
          </Link>
          <Link to="./gallery" className="gall">
            <img src={p22} alt="styles" />
          </Link>
          <Link to="./gallery" className="gall">
            <img src={p16} alt="styles" />
          </Link>
          <Link to="./gallery" className="gall">
            <img src={p23} alt="styles" />
          </Link>
          <Link to="./gallery" className="gall">
            <img src={p24} alt="styles" />
          </Link>
          <Link to="./gallery" className="gall">
            <img src={img6} alt="styles" />
          </Link>
          <Link to="./gallery" className="gall">
            <img src={img7} alt="styles" />
          </Link>
          <Link to="./gallery" className="gall">
            <img src={img8} alt="styles" />
          </Link>
          <Link to="./gallery" className="gall">
            <img src={img9} alt="styles" />
          </Link>
          <Link to="./gallery" className="gall">
            <img src={img10} alt="styles" />
          </Link>
          <Link to="./gallery" className="gall">
            <img src={img11} alt="styles" />
          </Link>
          <Link to="./gallery" className="gall">
            <img src={img12} alt="styles" />
          </Link>
        </div>
      </div>
      <div className="div-gallery">
        <Link className="gallery-page" to="./gallery">
          GO TO GALLERY
        </Link>
      </div>
    </section>
  );
}

export default Portfolio;
