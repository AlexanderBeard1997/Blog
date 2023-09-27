const API_URL = "http://localhost:4000"

export const readReplies = async () => {
    let response = await fetch(`${API_URL}/replies/item`)
    let data = await response.json()
    return data

}

