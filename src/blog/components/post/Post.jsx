import "./post.css";
import img3 from "../images/p3.jpg";

const Post = () => {
  return (
    <div className="post">
      <img src={img3} alt="" className="postImg" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet.</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        amet consequatur, id voluptatem accusamus nulla quae maiores error
        obcaecati enim aliquid neque placeat autem aliquam nesciunt delectus,
        velit facere ullam! Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Perferendis amet consequatur, id voluptatem accusamus nulla quae
        maiores error obcaecati enim aliquid neque placeat autem aliquam
        nesciunt delectus, velit facere ullam! Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Perferendis amet consequatur, id
        voluptatem accusamus nulla quae maiores error obcaecati enim aliquid
        neque placeat autem aliquam nesciunt delectus, velit facere ullam!
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        amet consequatur, id voluptatem accusamus nulla quae maiores error
        obcaecati enim aliquid neque placeat autem aliquam nesciunt delectus,
        velit facere ullam!
      </p>
    </div>
  );
};

export default Post;
