import { Link } from "react-router-dom";

const Card = ({ blog, deleteHandler }) => {
 
  const newDate = blog.date.substring(0, 10);

  return (
    <div>
      <h3>{blog.title}</h3>
      <p>{blog.text}</p>
      <img src={blog.image} alt={blog.title} width="25%" />
      <footer>{newDate}</footer> 
      <button onClick={() => deleteHandler(blog)}>Delete</button>
      <Link to={`/${blog._id}`}>Edit Blog</Link>
    </div>
  );
};

export default Card;