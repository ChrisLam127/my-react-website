import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Reviews from "../../components/reviews/Reviews";
import { Link } from "react-router-dom";
import img from "../../images/p10.jpg";
function Graphic() {
  return (
    <>
      <Navbar />
      <Hero
        image={img}
        heading="GRAPHIC "
        span="- DESIGN"
        desc1="GET YOUR BUSINESS COORPORATE SORTED OUT WITH US,"
        desc2=" OUR
              BASIC GRAPHIC DESIGN PACKAGE IS FROM "
        price="R800"
      />
      <section id="about" className="section">
        <div className="title">
          <h2>
            Website <span> Design</span>
          </h2>
        </div>
        <div className="about">
          <div className="div-left">
            <p>
              Invest in Your Business. A good place to start is by getting your
              <span>Corporate identity</span> in order, which generally include
              a<span>Logo, business Cards, letterhead, Company Profile</span>
              and
              <span>email signature.</span>
            </p>
            <p>
              If you are looking to build a complete website for your business,
              starting with a <span>Graphic design idea</span>
              will ease the task, and allow us to build you a proper website and
              add our touch to help you
              <span>bring in traffic</span>, and convert them to sales.
            </p>

            <p>
              At <b>Lambo Digital</b> we provide ourselves on our ability to
              capture your website concept and deliver a website design tailored
              to your business's digital marketing needs.
            </p>
            <p>
              We offer our clients cost-effective website design packages,
              designed according to your budget.
            </p>
            <h2>How to create a website!</h2>
            <p>
              once your website is completed, we pride you with a
              <span>free training and user assistance</span> enabling you to
              maintain and update your own website independently.
            </p>
            <p>
              we Provide <span>support</span> for all our websites.
            </p>
            <p>
              For more information on our website design prices & packages and
              for a no obligation quote, <Link to="/contact">Contact Us</Link>.
            </p>
            <p></p>
          </div>
          <div className="div-right">
            <div className="btns">
              <Link to="#" className="quote">
                <i className="fas fa-star"></i> GET A QUOTE
              </Link>
            </div>
            <div className="btns">
              <Link to="#" className="free">
                GET A FREE SEO AUDIT
              </Link>
            </div>
            <div className="submenu">
              <ul>
                <li>
                  <Link to="#">Design Portfolio</Link>
                </li>
                <li>
                  <Link to="#">Graphic Design Packages</Link>
                </li>
                <li>
                  <Link to="#">Graphic Design Services</Link>
                </li>
                <li>
                  <Link to="#">Printing Services</Link>
                </li>
              </ul>
            </div>
          </div>
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
              It is neccessary to brand your business to allow recognition form
              customer and even your employees...
            </p>
          </div>
          <div className="price">
            <div className="price-item active">
              <div className="price-header">CORPORATE IDENTITY</div>
              <div className="price-value">R4500</div>
              <div className="description">
                <h5>EVERYTHING YOU NEED</h5>
                <p>Logo Design, Includes 3 Preliminary options</p>
                <p>Business card Design, includes 3 Preliminary Options</p>
                <p>
                  Electronic Letterhead Design, includes 3 Preliminary Options
                </p>
                <p>Email Signature Design, includes 2 demo Designs</p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=Corporate Identity&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=4500"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">COMPANY PROFILE</div>
              <div className="price-value">R4400</div>
              <div className="description">
                <h5>NECCESSARY FOR YOUR BUSINESS</h5>
                <p>Includes 4 Pages</p>
                <p>Convert to PDF Format</p>
                <p>Client to supply basic information and photos</p>
                <p>COMPANY PROFILE PORTFOLIO</p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=Company Profile&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=4400"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">LOGO DESIGN</div>
              <div className="price-value">R2150</div>
              <div className="description">
                <h5>LET DO IT RIGHT</h5>
                <p>Includes 3 demo designs and a 2 stage editing process</p>
                <p>Converted to PDF, JPEG and PNG</p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=Logo Design&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=2150"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">ELECTRONIC LETTERHEAD</div>
              <div className="price-value">R1050</div>
              <div className="description">
                <h5>FOR CORPORATE & ADMIN DOCUMENTS</h5>
                <p>
                  3 Demo designs and a 2 stage editing process, where after an
                  hourly rate will be charged
                </p>
                <p>
                  Includes the cover/first and run-on page (for documents of
                  more than one page)
                </p>
                <p>Printable & MS Word format</p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=Electronic Letterhead&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=1050"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">BUSINESS CARD DESIGN</div>
              <div className="price-value">R490</div>
              <div className="description">
                <h5>LOOK PROFESSIONAL IN MEETINGS</h5>
                <p>Full Color Front & Back</p>
                <p>
                  Includes 3 Demo Designs and a 2 stage editing process, where
                  after an hourly rate will be charged
                </p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=Business Card Design&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=499"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">POWERPOINT PRESENTATION</div>
              <div className="price-value">R5250</div>
              <div className="description">
                <h5>TO IMPRESS YOUR AUDIENCE</h5>
                <p>
                  Can also be used as Company Profile, Includes up to 10 Slides
                </p>
                <p>
                  We can provide Images/ graphics and photos to no extra cost
                </p>
                <p>
                  Logo and textual information must be supplied by the client
                </p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=Powerpoint Presentation&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=5250"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">A5 FLYER DESIGN</div>
              <div className="price-value">R650</div>
              <div className="description">
                <h5>CAN STILL BE USED</h5>
                <p>Design Concept at R195</p>
                <p>Full color front & back</p>
                <p>
                  Include 3 demo designs and a 2 stage editing process, where
                  after on hourly rate will be charged.
                </p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=A5 Flyer Design&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=650"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">A2 POSTER DESIGN</div>
              <div className="price-value">R1200</div>
              <div className="description">
                <h5>GOOD FOR EVENT</h5>
                <p>Design Concept at R325</p>
                <p>Full color front & back</p>
                <p>
                  Include 3 demo designs and a 2 stage editing process, where
                  after on hourly rate will be charged.
                </p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=A2 Poster Design&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=1200"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">BROCHURE DESIGN</div>
              <div className="price-value">R1300</div>
              <div className="description">
                <h5>GOOD FOR EXHIBITIONS</h5>
                <p>A4 folded to A5</p>
                <p>Design Concept at R300</p>
                <p>Full color front & back</p>
                <p>
                  Include 2 demo designs and a 2 stage editing process, where
                  after on hourly rate will be charged.
                </p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=Brochure Design&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=1300"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">EMAIL SIGNATURE</div>
              <div className="price-value">R625</div>
              <div className="description">
                <h5>LOOKS PROFESSIONAL</h5>
                <p>
                  Includes 3 demo designs and a 2 stages editing process where
                  after an hourly rate will be charged.
                </p>
                <p>
                  You name & Surname, Title, conatct details and logo will be
                  included on the design
                </p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=Email Signature&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=625"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">CORPORATE FOLDER</div>
              <div className="price-value">R1350</div>
              <div className="description">
                <h5>IDEAL FOR PRESENTATIONS & TENDERS</h5>
                <p>A3 folded to A4</p>
                <p>Design Concept at R550</p>
                <p>Cover Design front & back</p>
                <p>
                  inside flap, to cater for aditional documents & business Cards
                </p>
                <p>
                  Includes 2 demo designs and a 1 stages editing process where
                  after an hourly rate will be charged.
                </p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=Corporate Folder&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=1350"
                className="cta"
              >
                PLACE ORDER
              </Link>
            </div>
            <div className="price-item">
              <div className="price-header">VEHICLE MAGNET DESIGN</div>
              <div className="price-value">R470</div>
              <div className="description">
                <h5>GIVES MORE EXPOSURE</h5>
                <p>Size = 600mm x 300 mm</p>
                <p>Full Color Front</p>
                <p>
                  Includes 2 demo designs and a 1 stages editing process where
                  after an hourly rate will be charged.
                </p>
              </div>
              <Link
                to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=Vehicle magnet Design&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=470"
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

export default Graphic;
