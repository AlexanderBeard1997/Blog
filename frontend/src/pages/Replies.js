import { useEffect, useState } from "react";
import { readBlogs } from "../api/blog api/readBlogs";
import Card from '../components/Card'
import { deleteBlog } from "../api/blog api/deleteBlog";

const Replies = () => {
    const [replies, setReplies] = useState([ ])


    const deleteHandler = async (blog) => {
        let response = await deleteBlog(blog)
        console.log(response)
        let updated= [...replies]
        updated = updated.filter(items=> items._id !== response._id)
        setBlogs(updated)
    }
    useEffect(() => {
        const fetchReplies = async () => {
            let data = await readReplies()
            setBlogs(data.blogs)
            console.log(data.message)
            console.log(data)
        }
        fetchReplies()
    }, [])
 
    
        
      
   
    

}

export default Replies