const API_URL = `http://localhost:4000`;

export const addComment = async (comment, blogId) => {
  const obj = {
    comment: comment,
    blogId: blogId, // Include the blogId here
  };

  const response = await fetch(`${API_URL}/comments/item`, {
    method: 'POST',
    body: JSON.stringify(obj),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const json = await response.json();
  return json;
};
