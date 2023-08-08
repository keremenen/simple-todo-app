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

  return (
    <div className="todo-app">
      <TaskList todos={todos} />
    </div>
  )
}

export default App
