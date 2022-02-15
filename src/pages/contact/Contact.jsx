import React, { Link } from "react";
import "./contact.css";
import Navbar from "../../components/navbar/Navbar";
import SideNavbar from "../../components/sideNavbar/SideNavbar";
import Reviews from "../../components/reviews/Reviews";
import img from "../../images/p13.jpg";
import Hero from "../../components/hero/Hero";
function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        image={img}
        heading="CONTACT "
        span="- US"
        desc1="WEBSITE DESIGNED, DOMAIN &"
        desc2="HOSTING FROM Only   "
        price="R150/Month"
      />

      <section id="about" className="section">
        <div className="title">
          <h2>
            Contact us <span> for a quote</span>
          </h2>
        </div>
        <div className="about">
          <div className="div-left">
            <div id="form">
              <h2>QUERY & QUOTE REQUEST</h2>
              <form
                className="form"
                action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01"
                method="POST"
              >
                <div className="labels">
                  <div className="label">
                    <label for="google-Ads">
                      <input
                        type="checkbox"
                        name="google-Ads"
                        value="google Ads"
                      />
                      Google Advertising
                    </label>
                    <br />
                    <label for="logo">
                      <input type="checkbox" name="logo" value="logo" /> Logo
                      Design
                    </label>
                    <br />

                    <label for="social-media-management">
                      <input
                        type="checkbox"
                        name="social-media-management"
                        value="social media management"
                      />
                      Social Media Management
                    </label>
                    <br />

                    <label for="social-media-ads">
                      <input
                        type="checkbox"
                        name="social-media-ads"
                        value="social media ads"
                      />
                      Social Media Advertising
                    </label>
                    <br />

                    <label for="seo">
                      <input type="checkbox" name="seo" value="seo" /> Search
                      Engine Optimisation (SEO)
                    </label>
                    <br />
                    <label for="domain-reg">
                      <input
                        type="checkbox"
                        name="domain-reg"
                        value="domain-reg"
                      />
                      Search Domain Registration
                    </label>
                    <br />
                  </div>
                  <div className="label">
                    <label for="domain-transf">
                      <input
                        type="checkbox"
                        name="domain-transf"
                        value="domain-transf"
                      />
                      Domain Transfer
                    </label>
                    <br />
                    <label for="hosting">
                      <input type="checkbox" name="hosting" value="hosting" />
                      Hosting
                    </label>
                    <br />

                    <label for="ssl-certificate">
                      <input
                        type="checkbox"
                        name="ssl-certificate"
                        value="ssl certificate"
                      />
                      SSL Certificate
                    </label>
                    <br />

                    <label for="email-marketing">
                      <input
                        type="checkbox"
                        name="email-marketing"
                        value="email marketing"
                      />
                      Email Marketing
                    </label>
                    <br />
                    <label for="business-card">
                      <input
                        type="checkbox"
                        name="business-card"
                        value="business-card"
                      />
                      Business Card Design
                    </label>
                    <br />

                    <label for="consulting">
                      <input
                        type="checkbox"
                        name="consulting"
                        value="consulting"
                      />
                      Consulting
                    </label>
                    <br />
                  </div>
                </div>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name*"
                  className="input"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email*"
                  required
                  className="input"
                />
                <input
                  type="number"
                  name="number"
                  placeholder="Your phone number"
                  className="input"
                />
                <input
                  type="text"
                  name="company name"
                  placeholder="Your Company Name"
                  className="input"
                />
                <input
                  type="text"
                  name="Your location"
                  placeholder="Enter Your location"
                  className="input"
                />
                <input
                  type="text"
                  name="domain"
                  placeholder="Enter Your website name"
                  className="input"
                />
                <select id="cars" name="cars" className="input">
                  <option value="" disabled selected>
                    Do you or will you Sell Online?
                  </option>
                  <option value="google search">
                    Yes, We are an eCommerce business
                  </option>
                  <option value="facebook">No, we do not sell online</option>
                </select>

                <select id="cars" name="cars" className="input">
                  <option value="" disabled selected required>
                    Service required*
                  </option>
                  <option value="new website">New Website</option>
                  <option value="website redesign">Website Redesign</option>
                  <option value="e-commerce website">E-commerce Website</option>
                  <option value="website maintenance">
                    Website maintenance
                  </option>
                  <option value="hosting">Hosting</option>
                  <option value="blog management">Blog Management</option>
                  <option value="branding">Branding</option>
                  <option value="printing">Printing</option>
                  <option value="mobile development">Mobile Development</option>
                  <option value="package deals">Package Deal</option>
                </select>

                <select id="cars" name="cars" className="input">
                  <option value="" disabled selected>
                    where did you hear about us
                  </option>
                  <option value="google search">Google Search</option>
                  <option value="facebook">Facebook</option>
                  <option value="instagram">Instagram</option>
                  <option value="twitter">Twitter</option>
                  <option value="linkedin">Linkedin</option>
                  <option value="pinterest">Pinterest</option>
                  <option value="email marketing">Email Marketing</option>
                  <option value="referal">Referal</option>
                  <option value="others">Others</option>
                </select>
                <textarea
                  className="input"
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enter your message"
                ></textarea>
                <button type="submit" className="submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
          <SideNavbar />
        </div>
      </section>
      <Reviews />
    </>
  );
}

export default Contact;
