import "./sidebar.css";
import img1 from "../images/p4.jpg";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About me</span>
        <img src={img1} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iure
          rerum similique in quis doloremque itaque sunt aspernatur.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">SEO</li>
          <li className="sidebarListItem">Social Ads</li>
          <li className="sidebarListItem">Web design</li>
          <li className="sidebarListItem">Writing</li>
          <li className="sidebarListItem">SMM</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Business</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i class="fab fa-facebook-square sidebarIcon"></i>
          <i class="fab fa-twitter-square sidebarIcon"></i>
          <i class="fab fa-instagram-square sidebarIcon"></i>
          <i class="fab fa-pinterest-square sidebarIcon"></i>
          <i class="fab fa-youtube-square sidebarIcon"></i>
        </div>
      </div>
    </div>
  );
}
