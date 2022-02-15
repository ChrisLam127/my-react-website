import "./header.css";
import img1 from "../images/p6.jpg";
function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img src={img1} alt="image" className="headerImg" />
    </div>
  );
}

export default Header;
