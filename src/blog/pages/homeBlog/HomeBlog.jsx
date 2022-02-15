import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./homeBlog.css";

export default function Home() {
  return (
    <>
      <Topbar />
      <Header />
      <div className="blog">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
