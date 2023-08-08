import { useState } from "react"
import TaskList from "./components/taskList/taskList"

const temporaryTodos = [
  {
    title: 'Take out the garbage',
    id: Math.floor(Math.random() * 1000),
    checked: true,
  },
  {
    title: 'Do shopping',
    id: Math.floor(Math.random() * 1000),
    checked: false,
  },
]

function App() {
  const [todos, setTodos] = useState(temporaryTodos)

  const handleDelete = (id) => {
    setTodos(prevState => {
      return prevState.filter(task => task.id !== id)
    })
  }

  const handleToggle = (id, checked) => {
    setTodos(prevState => {
      return prevState.map(todo => {
        if (todo.id === id) return { ...todo, checked: !checked }
        return todo
      })
    })
  }

  return (
    <div className="todo-app">
      <TaskList
        todos={todos}
        deleteTodo={handleDelete}
        toggleTodo={handleToggle}
      />
    </div>
  )
}

export default App
