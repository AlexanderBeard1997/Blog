import { useState } from "react"
import { replyToBlog } from "../api/blog api/replyToBlog"

const ReplyFunction = () => {
    const [userInput, setUserInput] = useState({
        text:""
    })
    
    const handler = async (e) => {
       
        const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    })
        /* let response = await addBlog(userInput)
        console.log(response)  */
    }

    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await replyToBlog(userInput);
      console.log(response);

    }

    return (
        <div>
            <h1>Reply to this Blog</h1>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                name="text"
                 value={userInput.text}
                 onChange={handler}
                 placeholder="Put your reply here"
                 />
                 <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ReplyFunction