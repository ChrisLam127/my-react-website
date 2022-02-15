import "./singlePost.css";
import img3 from "../images/p3.jpg";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div className="singlePostImg">
          <img src={img3} alt="" className="singlePostImg" />
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
              <i className="singlePostIcon far fa-edit"></i>
              <i className="singlePostIcon far fa-trash-alt"></i>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>Christian</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint sunt
            itaque incidunt fugiat, consequatur nemo tempore, necessitatibus,
            molestiae aspernatur nostrum distinctio sit voluptate tempora omnis
            ipsa possimus velit molestias sequi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sint sunt itaque incidunt fugiat,
            consequatur nemo tempore, necessitatibus, molestiae aspernatur
            nostrum distinctio sit voluptate tempora omnis ipsa possimus velit
            molestias sequi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sint sunt itaque incidunt fugiat, consequatur nemo tempore,
            necessitatibus, molestiae aspernatur nostrum distinctio sit
            voluptate tempora omnis ipsa possimus velit molestias sequi. Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Sint sunt itaque
            incidunt fugiat, consequatur nemo tempore, necessitatibus, molestiae
            aspernatur nostrum distinctio sit voluptate tempora omnis ipsa
            possimus velit molestias sequi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sint sunt itaque incidunt fugiat,
            consequatur nemo tempore, necessitatibus, molestiae aspernatur
            nostrum distinctio sit voluptate tempora omnis ipsa possimus velit
            molestias sequi. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sint sunt itaque incidunt fugiat, consequatur nemo tempore,
            necessitatibus, molestiae aspernatur nostrum distinctio sit
            voluptate tempora omnis ipsa possimus velit molestias sequi.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SinglePost;
