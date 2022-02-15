import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import img from "../../images/p5.jpg";
function Marketing() {
  return (
    <>
      <Navbar />
      <Hero
        image={img}
        heading="DIGITAL "
        span="- MARKETING"
        desc1="GET YOUR CUSTOMERS TO KNOW ABOUT YOUR BUSINESS THROUGH MARKETING,"
        desc2=" OUR
              BASIC MARKETING PACKAGE IS FROM "
        price="R2 500"
      />
      <div>
        <h1>Marketing</h1>
      </div>
    </>
  );
}

export default Marketing;
