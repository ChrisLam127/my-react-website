import "./webdesign.css";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import img from "../../images/p6.jpg";
import SideNavbar from "../../components/sideNavbar/SideNavbar";
import { Link } from "react-router-dom";
import Reviews from "../../components/reviews/Reviews";
import Price from "../../components/price/Price";
import Paragraph from "../../components/paragraph/Paragraph";
function Webdesign() {
  return (
    <>
      <Navbar />
      <Hero
        image={img}
        heading="WEBSITE"
        span="- DESIGN"
        desc1="EXPAND YOUR BUSINESS ONLINE WITH A WEBSITE"
        desc2=" OUR
              BASIC WEBSITE PRICE IS from  "
        price="R1 850"
      />
      <section id="webDesign">
        <div className="webDesignTitle">
          <h2>
            Website <span> Design</span>
          </h2>
        </div>
        <div className="webDesign">
          <div className="webDesign-left">
            <p>
              We are a Web Design agency based in Pretoria South Africa. All our
              websites are developed with the
              <span> latest technology</span> and
              <span> optimized for all device sizes</span>.
            </p>
            <h2>Responsive Website Design.</h2>
            <p>
              Responsive web design is an essential aspect of websites. It
              allows your website to resize automatically across all devices and
              browsers, optimising your user experience and interaction.
            </p>
            <p>
              Google and other search engine have increasingly placed emphasis
              on the mobile friendly aspects of websites design for their
              ranking.
              <b>Lambo Digital</b> is one of the foremost proponents of mobile
              first website design in South Africa.
            </p>
            <p>
              With responsive web design, your website can be turned into
              <span>Mobile App for your business.</span> In addition you can
              choose which website components you want to deploy for mobiles.
            </p>
            <h2>Content Management System (CMS)</h2>
            <p>
              Using a CMS for your website allows you to manage the content of
              your online business without the need to run to us. It allows you
              to load new products or services , hence constent updating your
              website as change happens in your business.
            </p>
            <p>
              We have also developed websites in other content management
              systems such as <span>Shopify, WordPress</span> based on the
              requirements of our clients and the business needs. The goal is to
              generate easy to manage pages and update websites with a
              professional look and feel. We only charge for implementation for
              each of these CMS. It is for that reason that
              <b>LD</b> Website design prices are so competitive. We provide
              enormous value with every website we develop.
            </p>
            <h2>Website Design & Digital Marketing</h2>
            <p>
              The goal is to understand your business first in order to provide
              you with the best online solution. we provide ourselves on our
              ability to capture your website concept and deliver a website
              design tailored to your business's digital marketing needs. We
              offer our clients cost-effective website design packages, designed
              according to your budget. We Provide <span>support</span> for all
              our websites.
            </p>

            <p>
              For more information on our website design prices & packages and
              for a no obligation quote,
              <Link to="./contact.html">Contact Us</Link>.
            </p>
          </div>
          <SideNavbar />
        </div>
      </section>
      <section id="pricing" className="section">
        <div className="title">
          <h2>
            Website <span>Pricing</span>
          </h2>
        </div>
        <div className="prices">
          <div className="signup text">
            <h3>CHECK OUR</h3>
            <h2>PACKAGES</h2>
            <p>
              If you are looking to build a complete website for your business,
              we will build you a proper website and add our touch to help you
              bring in traffic, and convert them to sales.
            </p>
          </div>
          <div className="price">
            <div className="price-item active">
              <div className="price-header">2 PAGES WEBSITE</div>
              <div className="price-value">R5500</div>
              <div className="description">
                <h5>IDEAL FOR START UP</h5>
                <p>Mobile Optimised (Responsive)</p>
                <p>HTML/CSS3 Programming</p>
                <p>SEO</p>
                <p>Hyperlinks to other Sites</p>
                <p>Online Hit Counter</p>
                <p>Google Map</p>
                <p>Photo Editing</p>
                <p>2 x Demo Designs</p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=2 Pages website&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=5500"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">5 PAGES WEBSITE</div>
              <div className="price-value">R11500</div>
              <div className="description">
                <h5>MOST POPULAR CHOICE</h5>
                <p>Mobile Optimised (Responsive)</p>
                <p>HTML/CSS3 Programming</p>
                <p>SEO</p>
                <p>Hyperlinks to other Sites</p>
                <p>Online Hit Counter</p>
                <p>Google Map</p>
                <p>Photo Editing</p>
                <p>2 x Demo Designs</p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=5 Pages website&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=11500"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">10 PAGES WEBSITE</div>
              <div className="price-value">R16500</div>
              <div className="description">
                <h5>FOR LARGE BUSINESSES</h5>
                <p>Mobile Optimised (Responsive)</p>
                <p>HTML/CSS3 Programming</p>
                <p>SEO</p>
                <p>Hyperlinks to other Sites</p>
                <p>Online Hit Counter</p>
                <p>Google Map</p>
                <p>Photo Editing</p>
                <p>2 x Demo Designs</p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=10 Pages website&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=16500"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">20 PAGES WEBSITE</div>
              <div className="price-value">R26500</div>
              <div className="description">
                <h5>FOR LARGE BUSINESSES</h5>
                <p>Mobile Optimised (Responsive)</p>
                <p>HTML/CSS3 Programming</p>
                <p>SEO</p>
                <p>Hyperlinks to other Sites</p>
                <p>Online Hit Counter</p>
                <p>Google Map</p>
                <p>Photo Editing</p>
                <p>2 x Demo Designs</p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=20 Pages website&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=26500"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">3 PAGES & ECOMMERCE FACILITY</div>
              <div className="price-value">R14850</div>
              <div className="description">
                <h5>START SELLING ONLINE</h5>
                <p>Mobile Optimised (Responsive)</p>
                <p>HTML/CSS3 Programming</p>
                <p>SEO</p>
                <p>Hyperlinks to other Sites</p>
                <p>Online Hit Counter</p>
                <p>Google Map</p>
                <p>Photo Editing</p>
                <p>2 x Demo Designs</p>
                <p>Online Payment</p>
                <p>Online Shopping Cart</p>
                <p>Check Out setup</p>
                <p>PayFast/PayPal</p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=3 Pages & Ecommerce Facility&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=14850"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">3 PAGES & ECOMMERCE + CMS</div>
              <div className="price-value">R18500</div>
              <div className="description">
                <h5>START SELLING ONLINE</h5>
                <p>Mobile Optimised (Responsive)</p>
                <p>HTML/CSS3 Programming</p>
                <p>SEO</p>
                <p>Hyperlinks to other Sites</p>
                <p>Online Hit Counter</p>
                <p>Google Map</p>
                <p>Photo Editing</p>
                <p>2 x Demo Designs</p>
                <p>Online Payment</p>
                <p>Online Shopping Cart</p>
                <p>Check Out setup</p>
                <p>PayFast/PayPal</p>
                <p>Content Management(Admin)</p>
                <p>Login, Password Reminder & DashBoard Pages</p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=3 Pages & Ecommerce + CMS&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=18500"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">3 PAGES + BLOG FACILITY</div>
              <div className="price-value">R12950</div>
              <div className="description">
                <h5>GREAT FOR SEO</h5>
                <p>Mobile Optimised (Responsive)</p>
                <p>HTML/CSS3 Programming</p>
                <p>SEO</p>
                <p>Hyperlinks to other Sites</p>
                <p>Online Hit Counter</p>
                <p>Google Map</p>
                <p>Photo Editing</p>
                <p>2 x Demo Designs</p>
                <p>Online Blog</p>
                <p>Comments and Ratings Facility</p>
                <p>Administrative Section</p>
                <p>User Registration Page</p>
                <p>Admin Approval Facility for User Registration</p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=3 Pages + Blog Facility&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=12950"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">E-COMMERCE FACILITY</div>
              <div className="price-value">R7150</div>
              <div className="description">
                <h5>ADDING ONTO YOUR WEBSITE</h5>
                <p>Integration of online Payment</p>
                <p>Online Shopping Cart</p>
                <p>Check Out Facility</p>
                <p>payFast Integration</p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=Ecommerce Facility&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=7150"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">E-COMMERCE + CMS</div>
              <div className="price-value">R11500</div>
              <div className="description">
                <h5>GETTING IN CHARGE</h5>
                <p>Integration of online Payment</p>
                <p>Online Shopping Cart</p>
                <p>Check Out Facility</p>
                <p>payFast Integration</p>
                <p>Content Management Section</p>
                <p>Login, Password Reminder & Dashboard Pages</p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=E-commerce + CMS&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=11500"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">STAND-ALONE BLOG FACILITY</div>
              <div className="price-value">R5250</div>
              <div className="description">
                <h5>SHARRING YOUR IDEAS</h5>
                <p>Online Blog Facility</p>
                <p>Comments & Ratings Facility</p>
                <p>Administrative Section to Alter Content</p>
                <p>Login, Password Reminder and Dashboard</p>
                <p>User Registration Page</p>
                <p>
                  Admin Approval Facility for Users Registration (if neccessary)
                </p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=Stamd-Alone Blog Facility&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=5250"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
          </div>
          <div className="package-deal">
            <Link to="./packages.html">CHECK PACKAGE COMBINATIONS</Link>
          </div>
        </div>
      </section>
      <Reviews />
    </>
  );
}

export default Webdesign;
