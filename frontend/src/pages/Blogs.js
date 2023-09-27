import { useEffect, useState } from "react";
import { readBlogs } from "../api/blog api/readBlogs";
import Card from '../components/Card'
import { deleteBlog } from "../api/blog api/deleteBlog";

const Blogs = () => {
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
 
   
   
    

}

export default Blogs