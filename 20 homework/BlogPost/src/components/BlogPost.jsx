import myImage from "../assets/images/img.png";
import "./BlogPost.css";
function BlogPost() {
  return (
    <>
      <div className="box">
        <img src={myImage} alt="Blog" />
        <h1>React Components</h1>
        <p>Madina Rahmani</p>
        <p>date: sep 14, 2026</p>
        <p>let's learn React components</p>
        <button className="myBlog">Read More</button>
      </div>
    </>
  );
}
export default BlogPost;
