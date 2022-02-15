import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import image1 from "../../images/png2.png";
import Portfolio from "../../components/portfolio/Portfolio";
import Reviews from "../../components/reviews/Reviews";
import Navbar from "../../components/navbar/Navbar";
import SideNavbar from "../../components/sideNavbar/SideNavbar";

function Home() {
  return (
    <>
      <Navbar />
      <div>
        <header className="home">
          <div className="homeBanner">
            <div className="homeContainer">
              <div className="social-media">
                <Link to="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link to="#">
                  <i className="fab fa-youtube"></i>
                </Link>
                <Link to="https://wa.me/+27817439255" target="_blank">
                  <i className="fab fa-whatsapp"></i>
                </Link>
              </div>
              <Link to="/googleAd">
                <h1>
                  DIGITAL <span>MARKETING</span> <small>from R2 500</small>
                </h1>
              </Link>
              <Link to="/maintenance">
                <h1>
                  WEB <span>MAINTENANCE</span>
                  <small>from R150</small>
                </h1>
              </Link>
              <Link to="/webDesign">
                <h1>
                  WEBSITE <span>DESIGN</span>
                  <small>from R1 850</small>
                </h1>
              </Link>
              <Link to="/hosting">
                <h1>
                  WEB <span>HOSTING</span>
                  <small>from R75 / Month</small>
                </h1>
              </Link>
              <Link to="/socialManagment">
                <h1>
                  WEB <span>MARKETING</span>
                  <small>from R2 500</small>
                </h1>
              </Link>
              <Link to="/SEO">
                <h1>
                  SEO <span>MARKETING</span>
                  <small>from R2 500</small>
                </h1>
              </Link>
              <p>Get Started Online Today</p>
              <Link to="/packages" className="scroll-link btn btn-white">
                Package Combination Deals
              </Link>
            </div>
          </div>
        </header>
        <section className="homeHero-section section">
          <div className="homeTitle">
            <h2>
              <span>
                Web Design, SEO, Social media <br /> & Google Marketing
              </span>
            </h2>
          </div>
          <div className="homeHero">
            <div className="homeHeroItem">
              <img src={image1} alt="image1" />
              <h3>Website Design</h3>
              <p className="paragraph">
                We offer affordable website design that will provide you with
                all the components that you need to market your business. Check
                <span>Our web design prices</span> and
                <span>get a quote for your business online</span> or for just an
                <span>Upgrade</span>.
              </p>
              <Link to="/webDesign" className="link">
                Learn More...
              </Link>
            </div>
            <div className="homeHeroItem">
              <img src={image1} alt="image2" />
              <h3>Digital marketing</h3>
              <p className="paragraph">
                The purpose of a website is to convert visitors into customers.
                Allow your website to grow your business by attracting the right
                kinds of web traffic. You can target specific area, Countries
                and even city or your business surrounding.
                <span>Take the big step </span> for your business.
              </p>
              <Link to="/webDesign" className="link">
                Learn More...
              </Link>
            </div>
            <div className="homeHeroItem">
              <img src={image1} alt="image3" />
              <h3>SEO Services</h3>
              <p className="paragraph">
                The goal of <span>Search Engine Optimisation</span> is to
                redefine your website offering, increase search relevance for
                your content, lifting your search engine ranking and growing
                your business visibility on the web.
              </p>
              <Link to="/webDesign" className="link">
                Learn More...
              </Link>
            </div>
            <div className="homeHeroItem">
              <img src={image1} alt="image4" />
              <h3>Social Marketing</h3>
              <p className="paragraph">
                Drive traffic to your Website and engage your customers and
                visitors about your business on the daily basic, in a virtual
                conversation about your business, products and services with
                social media & content marketing.
              </p>
              <Link to="/webDesign" className="link">
                Learn More...
              </Link>
            </div>
          </div>
        </section>
        <section className="homeServices-section ">
          <div className="homeTitle">
            <h2>
              Our <span>Services</span>
            </h2>
          </div>
          <div className="homeServices">
            <div className="home-left">
              <h4>Lambo Digital </h4>
              <p>
                We started as a Design company based in Johannesburg South
                Africa. Offering our Design services all over South Africa.
                <p>
                  We started specialising in Web Design and Development in
                  January 2021 with a goal of covering every aspect of digital
                  marketing. we are your <span>One-Stop-Shop</span> for all your
                  online needs.
                </p>
              </p>
              <p>
                We provide online solutions for our clients unique business
                requirements. it is our role to know your business and provide
                you with a solution that will work best for you.
              </p>
              <p>Our Degital Marketing are cost effective and sustainable.</p>
              <h4>Web Design & Digital Marketing</h4>
              <p>
                We take care of all your website design requirements, from
                <Link to="/domain"> registering your domain name</Link>, to
                making sure your website is found in Search Engine Results (
                <Link to="/SEO">SEO</Link>)
              </p>
              <p>
                Every Website we built is very reponsive and render well in all
                devices and on all modern browsers. This is critical for search
                Engine Ranking. If your site is not mobile friendly, then please
                <Link to="/contact">contact us</Link> for a website redesign
                project.
              </p>
              <h4>Our online Services Include:</h4>
              <div className="service">
                <h5>Web Design, & Development Services</h5>
                <ul>
                  <li>
                    <Link to="/webDesign">Website Design</Link>
                  </li>
                  <li>
                    <Link to="/webDesign">WordPress CMS</Link>
                  </li>
                  <li>
                    <Link to="/webDesign">Shopify CMS</Link>
                  </li>
                  <li>
                    <Link to="/webDesign">CMS Contenful</Link>
                  </li>
                  <li>
                    <Link to="/webDesign">Ecommerce Websites Design</Link>
                  </li>
                  <li>
                    <Link to="/webDesign">Business Websites</Link>
                  </li>
                </ul>
              </div>
              <div className="homeService">
                <h5>Web Hosting</h5>
                <ul>
                  <li>
                    <Link to="/hosting">Website Design & Hosting</Link>
                  </li>
                </ul>
              </div>
              <div className="homeService">
                <h5>Graphic Design</h5>
                <ul>
                  <li>
                    <Link to="/graphicdesign">Brand & Logo Design</Link>
                  </li>
                  <li>
                    <Link to="/graphicdesign">
                      Stationery, Business Cards and Letterheads
                    </Link>
                  </li>
                  <li>
                    <Link to="/graphicdesign">Product & Packaging Design</Link>
                  </li>
                  <li>
                    <Link to="/graphicdesign">Flyers & Poster Design</Link>
                  </li>
                  <li>
                    <Link to="/graphicdesign">Web Banner Design</Link>
                  </li>
                </ul>
              </div>
              <div className="homeService">
                <h5>Digital Marketing</h5>
                <ul>
                  <li>
                    <Link to="/digitalAd">Digital Marketing</Link>
                  </li>
                  <li>
                    <Link to="/digitalAd">
                      Search Engine Optimisation (SEO)
                    </Link>
                  </li>
                  <li>
                    <Link to="/digitalAd">Content Keyword Optimization</Link>
                  </li>
                  <li>
                    <Link to="/digitalAd">PPC Advertisement</Link>
                  </li>
                  <li>
                    <Link to="/digitalAd">Social Media Marketing</Link>
                  </li>
                  <li>
                    <Link to="/digitalAd">Bulk Email Marketing</Link>
                  </li>
                </ul>
              </div>
              <h4> Website Design Prices, Packages & Portfolio</h4>
              <p>
                We make use of the latest technology to make our website design
                of high standard, with competitive prices. Starting as low as
                R5250.
              </p>
              <p>
                Our website design processes and tools are selected based on the
                particular needs of every client to provide them with the best
                result possible.
              </p>
              <p>
                Our
                <Link to="/packages">affordable website design packages</Link>
                include a wide variety of unique design concepts tailored to
                your business by experienced website design professionals.
              </p>
              <p>
                If you would like to have a discussion concerning your online
                business needs please
                <Link to="/contact">Send Us a Message</Link> and we will see
                that your business goes online in the best possible way.
              </p>
            </div>

            <SideNavbar />
          </div>
        </section>
        <Portfolio />
        <Reviews />
      </div>
    </>
  );
}

export default Home;
