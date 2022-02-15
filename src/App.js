import "./App.css";
import Home from "./pages/home/Home";
import Webdesign from "./pages/webdesign/Webdesign";
import Contact from "./pages/contact/Contact";
import Marketing from "./pages/marketing/Marketing";
import Graphic from "./pages/graphic/Graphic";
import Hosting from "./pages/hosting/Hosting";
import HomeBlog from "../src/blog/pages/homeBlog/HomeBlog";
import Single from "../src/blog/pages/single/Single";
import Login from "../src/blog/pages/login/Login";
import Write from "../src/blog/pages/write/Write";
import Register from "../src/blog/pages/register/Register";
import Settings from "../src/blog/pages/settings/Settings";
import Footer from "./components/footer/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  const user = false;
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webdesign" element={<Webdesign />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/graphic" element={<Graphic />} />
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/homeBlog" element={<HomeBlog />} />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/login" element={user ? <HomeBlog /> : <Login />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
