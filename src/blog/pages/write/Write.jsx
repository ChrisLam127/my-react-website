import "./write.css";
import Topbar from "../../components/topbar/Topbar";
import img from "../../components/images/heroImg.jpg";
function Write() {
  return (
    <>
      <Topbar />
      <div className="write">
        <img src={img} alt="" className="writeImg" />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className=" writeIcon fas fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
            <input
              type="text"
              placeholder="Title"
              className="writeInput"
              autoFocus={true}
            />
          </div>
          <div className="writeFormGroup">
            <textarea
              placeholder="Tell your Story..."
              type="text"
              className="writeInput writeText"
            ></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
      </div>
    </>
  );
}

export default Write;
