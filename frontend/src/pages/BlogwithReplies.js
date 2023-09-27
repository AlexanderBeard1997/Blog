import { useEffect, useState } from "react";
import { readBlogs } from "../api/blog api/readBlogs";
import Card from '../components/Card'
import { deleteBlog } from "../api/blog api/deleteBlog";
import { Replies } from "./Replies"
import { Blogs } from "./Blogs"
import { addBlogwithReply } from "../api/blog api/addBlogwithReply"


  export const blogWithReplies = [Blogs, Replies]
    