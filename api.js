const baseURL = "http://localhost:3001"

export const getAllTodos = async () => {
  return fetch(`${baseURL}/tasks`, {cache: 'no-store'})
    .then(res => res.json())
}

export const addTodo = async (todo) => {
  fetch(`${baseURL}/tasks`,{
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
    .then(res => res.json())
}

export const editTodo = async (todo) => {
  fetch(`${baseURL}/tasks/${todo.id}`,{
    method: "PUT",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
    .then(res => res.json())
}

export const deleteTodo = async (id) => {
  fetch(`${baseURL}/tasks/${id}`,{
    method: "DELETE",
  })
}