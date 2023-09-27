import { useEffect, useState } from "react";
import { readBlogs } from "../api/blog api/readBlogs";
import Card from '../components/Card'
import { deleteBlog } from "../api/blog api/deleteBlog";
import { blogWithReplies } from "./BlogswithReplies";
import { readBlogwithReply } from "../api.blog api/readBlogwithReply";

const Homepage = () => {
    const [blogWithReplies, setBlogWithReplies] = useState([ ])


    const deleteHandler = async (blog) => {
        let response = await deleteBlog(blog)
        console.log(response)
        let updated= [...blogs]
        updated = updated.filter(items=> items._id !== response._id)
        setBlogs(updated)
    }
    useEffect(() => {
        const fetchblogWithReplies = async () => {
            let data = await readblogWithReplies()
            setBlogswithReply(data.blogs)
            console.log(data.message)
            console.log(data)
        }
        fetchblogWithReplies()
    }, [])
 
    if (!blogWithReplies) return <h1>loading...</h1>
    return (
        
        <div className="items">
            <>
                {
                    blogWithReplies ? blogWithReplies.map((blogWithReplies) => <Card key={blogsWithReplies._id} deleteHandler={deleteHandler} blog={blogWithReplies}/>)
                        : <p>loading...</p>
                }
            </>
        </div>
   
    );

}

export default Homepage