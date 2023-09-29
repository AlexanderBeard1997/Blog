// Homepage.js
import { useEffect, useState } from "react";
import { readBlogs } from "../api/blog api/readBlogs";
import Card from '../components/Card'
import { deleteBlog } from "../api/blog api/deleteBlog";
import { readComments } from "../api/comments/readC";

const Homepage = () => {
    const [blogs, setBlogs] = useState([]);
    const [comments, setComments] = useState([]);

    const deleteHandler = async (blog) => {
        let response = await deleteBlog(blog)
        console.log(response)
        let updated = [...blogs]
        updated = updated.filter(items => items._id !== response._id)
        setBlogs(updated)
    }

    useEffect(() => {
        const fetchData = async () => {
            let blogData = await readBlogs();
            setBlogs(blogData.blogs);
            
            let commentData = await readComments();
            setComments(commentData.comments);
        }
        fetchData();
    }, []);

    if (!blogs) return <h1>loading...</h1>

    return (
        <div className="items">
            {blogs.map((blog) => (
                <Card
                    key={blog._id}
                    deleteHandler={deleteHandler}
                    blog={blog}
                    comments={comments.filter((comment) => comment.blogId === blog._id)}
                />
            ))}
        </div>
    );
}

export default Homepage;
