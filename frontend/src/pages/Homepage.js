import { useEffect, useState } from "react";
import { readBlogs } from "../api/blog api/readBlogs";
import Card from '../components/Card'
import { deleteBlog } from "../api/blog api/deleteBlog";


const Homepage = () => {
    const [blogs, setBlogs] = useState([ ])
    const deleteHandler = async (blog) => {
        let response = await deleteBlog(blog)
        console.log(response)
        let updated= [...blogs]
        updated = updated.filter(items=> items._id !== response._id)
        setBlogs(updated)
    }
    useEffect(() => {
        const fetchBlogs = async () => {
            let data = await readBlogs()
            setBlogs(data.blogs)
            console.log(data.message)
            console.log(data)
        }
        fetchBlogs()
    }, [])
 
    if (!blogs) return <h1>loading...</h1>
    return (
        <div id="container">
        <h1>QuirkyQuill.com</h1>
        <div id="card-container">
        <div className="items">
            <>
                {
                    blogs ? blogs.map((blog) => <Card key={blogs._id} deleteHandler={deleteHandler} blog={blog}/>)
                        : <p>loading...</p>
                }
            </>
        </div>
        </div>
        <div className="footer">
        © 2023 Blog Name. All Rights Reserved.
        </div>
        </div>
   
    );

}

export default Homepage