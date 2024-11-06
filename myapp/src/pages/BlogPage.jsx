import Sidebar from "../components/Sidebar/Sidebar";
import Main from "../components/Main/Main";
import useFetch from "../useFetch";
import { useState } from "react";
import "./CSS/BlogPage.css";

const BlogPage = () => {
    const { data: blogs, error, isPending } = useFetch("http://localhost:8000/blogs");
    const [selectedCategory, setSelectedCategory] = useState("All");

    //Callback Prop: A prop that is a function, allowing the child to communicate or trigger changes in the parent.
    //setSelectedCategory is the value, and inside the child component, we assign a new value category to that function and is then used to update the state in parent
    return (
        <div className="blog-page">
            <Sidebar onCategorySelect={setSelectedCategory} /> <Main blogs={blogs} selectedCategory={selectedCategory} error={error} isPending={isPending} />
        </div>
    );
};

export default BlogPage;
