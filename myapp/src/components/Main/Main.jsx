import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

const Main = ({ blogs, selectedCategory, error, isPending }) => {
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    if (blogs) {
      if (selectedCategory === "All") {
        setFilteredBlogs(blogs); // Show all blogs when "All" is selected
      } else {
        const filtered = blogs.filter((blog) => blog.categories.includes(selectedCategory));
        setFilteredBlogs(filtered);
      }
    }
  }, [selectedCategory, blogs]);

  return (
    <div className="main">
      <div className="main-right">
        <h1>{selectedCategory === "All" ? "All Blogs" : `${selectedCategory} Blogs`}</h1>
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {filteredBlogs.length === 0 && !isPending && <div>No blogs available.</div>}
        {filteredBlogs.map((blog) => (
          <div key={blog.id} className="blog-preview">
            {blog.image && <img src={blog.image} alt={blog.title} className="blog-image" />}
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
            <p>{blog.body}</p>
            <Link to={`/blogs/${blog.id}`}>
              <p>Read more...</p>
            </Link>
            <p>
              <strong>Category:</strong> {blog.categories.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
