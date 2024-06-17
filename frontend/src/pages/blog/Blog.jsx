import "./blog.scss";
import { blogPost } from "../../constant/data";
import images from "../../assets";
const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-top">
        <div className="blog-img">
          <img src={images.bolg2} alt="" />
        </div>
        <h2>Our Blogs</h2>
      </div>
      <div className="blog-bottom">
        <div className="blog-left">
          {blogPost.map(({ id, image, title, author, date, description }) => {
            return (
              <div key={id} className="blog-item">
                <img src={image} alt="postImage" />

                <p>{date}</p>
                <h3>{title}</h3>
                <h4> By author {author}</h4>
                <p>{description}</p>
                <button>Read More</button>
              </div>
            );
          })}
        </div>
        <div className="blog-right"></div>
      </div>
    </div>
  );
};

export default Blog;
