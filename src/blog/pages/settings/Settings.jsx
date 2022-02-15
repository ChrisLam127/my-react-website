import "./settings.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import img from "../../components/images/p7.jpg";
function Settings() {
  return (
    <>
      <Topbar />
      <div className="settings">
        <div className="settingsWrapper">
          <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Your Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src={img} alt="" />
              <label htmlFor="fileInput">
                <i className=" settingsPPIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{ display: "none" }} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Christian" />
            <label>Email</label>
            <input type="email" placeholder="christian@gmail.com" />
            <label>Password</label>
            <input type="password" />
            <button className="settingsBtn">Update</button>
          </form>
        </div>
        <Sidebar />
      </div>
    </>
  );
}

export default Settings;
