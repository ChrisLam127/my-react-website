import "./single.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";

function Single() {
  return (
    <>
      <Topbar />
      <div className="single">
        <SinglePost />
        <Sidebar />
      </div>
    </>
  );
}

export default Single;
