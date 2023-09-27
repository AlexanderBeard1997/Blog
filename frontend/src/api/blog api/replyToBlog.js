const API_URL = `http://localhost:4000`

export const replyToBlog = async (reply) => {
    
    let obj = { text: reply.text }
    const response = await fetch(`${API_URL}/replies/item`, {
        // method type?
        method: 'POST',
        // sending body, stringify data
        body: JSON.stringify(obj),
        // content type?
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const json = await response.json()
    return json
}