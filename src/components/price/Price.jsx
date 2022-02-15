import "./price.css";
import { Link } from "react-router-dom";
import Paragraph from "../paragraph/Paragraph";

const Price = ({ title, value, heading, children }) => {
  return (
    <div className="price-item active">
      <div className="price-header">{title}</div>
      <div className="price-value">{value}</div>
      <div className="description">
        <h5>{heading}</h5>
        {children}
      </div>
      <Link
        to="https://www.payfast.co.za/eng/process?cmd=_paynow&receiver=18460293&item_name=2 Pages website&return_url=https://cldigital.netlify.app/webdesignpackages.html&notify_url=https://cldigital.netlify.app&amount=5500"
        className="cta"
      >
        PLACE ORDER
      </Link>
    </div>
  );
};

export default Price;
