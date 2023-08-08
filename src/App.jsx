import { useState } from "react"

const temporaryTodos = [
  {
    title: 'Take out the garbage',
    id: Math.floor(Math.random() * 1000)
  },
  {
    title: 'Do shopping',
    id: Math.floor(Math.random() * 1000)
  },
]

function App() {
  const [todos, setTodos] = useState(temporaryTodos)

  return (
    <div className="todo-app">
      {todos && todos.map(todo => (
        <li key={todo.id}>
          <span>{todo.title}</span>
        </li>
      ))}
    </div>
  )
}

export default App
