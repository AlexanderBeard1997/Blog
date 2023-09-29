// Card.js
import { Link } from "react-router-dom";
import { addComment } from "../api/comments/postC";

import React, { useState } from "react";

const Card = ({ blog, deleteHandler, comments }) => {
    const newDate = blog.date.substring(0, 10);

    const [showCommentBox, setShowCommentBox] = useState(false);
    const [comment, setComment] = useState("");

    const toggleCommentBox = () => {
        setShowCommentBox(!showCommentBox);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleCommentSubmit = async (e) => {
        e.preventDefault();
        const response = await addComment(comment);
        console.log(response);
        // Add logic to handle the submitted comment (e.g., store it in state or send it to a server).

        setComment('');
        setShowCommentBox(false);
    };

    return (
        <div>
            <h3>{blog.title}</h3>
            <p>{blog.text}</p>
            <img src={blog.image} alt={blog.title} width="25%" />
            <footer>{newDate}</footer>
            <button onClick={() => deleteHandler(blog)}>Delete</button>
            <Link to={`/${blog._id}`}>Edit Blog</Link>
            <button onClick={toggleCommentBox}>Add Comment</button>
            {showCommentBox && (
                <form onSubmit={handleCommentSubmit}>
                    <textarea
                        placeholder="Write your comment here..."
                        value={comment}
                        onChange={handleCommentChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            )}
            <div>
                <h4>Comments:</h4>
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>{comment.content}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Card;
