import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import { getBlog } from "../api/blog api/getBlog"
import { updateBlog } from "../api/blog api/updateBlog"

const EditBlog = () => {
    const { id } = useParams()
    const [blogUpdate, setBlogUpdate] = useState({})
    const [userInput, setUserInput] = useState('')
    const [selectedField, setSelectedField] = useState('')
    const [original, setOriginal] = useState('')

    const submitHandler = async () => {
        if (selectedField) {
            const updatedBlog = { ...blogUpdate, [selectedField]: userInput }
            let response = await updateBlog(updatedBlog)
            console.log(response)
            alert('Edited item')
        }
    }

    useEffect(() => {
        const fetchBlog = async () => {
            let data = await getBlog(id)
            setBlogUpdate(data)
            
            
            if (selectedField) {
                setOriginal(data[selectedField])
            }
        }
        fetchBlog()
    }, [id, selectedField]) 

    
    useEffect(() => {
        if (selectedField) {
            setOriginal(blogUpdate[selectedField])
        }
    }, [selectedField, blogUpdate])

    return (
        <div>
            <h1>Edit Blog</h1>
            <h2>{original}</h2>

            <select onChange={(e) => setSelectedField(e.target.value)}>
                <option value="">Select Field to Edit</option>
                <option value="title">Title</option>
                <option value="text">Text</option>
                <option value="image">Image</option>
            </select>

            {selectedField && (
                <>
                    <input
                        className="input-field"
                        onChange={(e) => setUserInput(e.target.value)}
                        value={userInput}
                    />
                    <br></br>
                </>
            )}

            <button className="button" onClick={submitHandler}>Submit</button>
            
        </div>
    )
}

export default EditBlog