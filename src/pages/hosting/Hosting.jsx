import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import img from "../../images/p16.jpg";

function Hosting() {
  return (
    <>
      <Navbar />
      <Hero
        image={img}
        heading="WEB "
        span="- HOSTING"
        desc1="WE OFFER A WIDE RANGE OF SERVICES TO HELP BUSINESSES"
        desc2=" OUR
              BASIC WEBSITE WITHOUT HOSTING IS FROM"
        price="R75/month"
      />
      <div>
        <h1>Hosting Page</h1>
      </div>
    </>
  );
}

export default Hosting;
