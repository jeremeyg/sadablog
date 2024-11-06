import React from "react";
import "./ProductDetails.css";
import { useParams } from "react-router-dom";
import useFetch from "../../useFetch";

const ProductDetails = () => {
  const { id } = useParams(); // Corrected the function call
  const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`);

  if (isPending) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="productdetails">
      {blog ? (
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <p>Author: {blog.author}</p>
          <img src={blog.image} alt={blog.title} />
        </div>
      ) : (
        <div>No blog found</div>
      )}
    </div>
  );
};

export default ProductDetails;
