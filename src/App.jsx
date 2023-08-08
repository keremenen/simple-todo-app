import { useState } from "react"
import TaskList from "./components/taskList/taskList"

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

  const handleDelete = (id) => {
    setTodos(prevState => {
      return prevState.filter(task => task.id !== id)
    })
  }

  return (
    <div className="todo-app">
      <TaskList todos={todos} deleteTodo={handleDelete} />
    </div>
  )
}

export default App
