import "./blog.scss";
import { blogPost } from "../../constant/data";
import { images } from "../../assets/images";
import { useEffect, useState } from "react";
const Blog = () => {
  const [showFullBlog, setShowFullBlog] = useState(false);
  const [descText, setDescText] = useState([]);

  useEffect(() => {
    blogPost.map(({ description }) => {
      if (!showFullBlog) {
        setDescText(description.substring(0, 200) + '....');
      }
    });
  }, [showFullBlog]);

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
          {blogPost.map(({ id, image, title, author, date ,description}) => {
            return (
              <div key={id} className="blog-item">
                <img src={image} alt="postImage" />

                <p>{date}</p>
                <h3>{title}</h3>
                <h4> By author {author}</h4>
                <p> {showFullBlog ? description:  descText}</p>
                <button onClick={() => setShowFullBlog(!showFullBlog)}>
                  {showFullBlog ? "see less" : "see more"}
                </button>
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
