const API_URL = "http://localhost:4000"

export const readBlogwithReply = async () => {
    let response = await fetch(`${API_URL}/blogWithReply/item`)
    let data = await response.json()
    return data

}