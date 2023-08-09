import { useState } from "react"
import './App.css'
import TaskList from "./components/TaskList"
import AddForm from "./components/AddForm"

const temporaryTodos = [
  {
    title: 'Take out the garbage',
    id: Math.floor(Math.random() * 1000),
    checked: true,
    date: new Date(),
  },
  {
    title: 'Do shopping',
    id: Math.floor(Math.random() * 1000),
    checked: false,
    date: new Date(),
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

  const handleAdd = (title) => {
    setTodos(prevState => {
      return [...prevState, {
        title: title,
        id: Math.floor(Math.random() * 1000),
        checked: false,
        date: new Date()
      }]
    })
  }

  return (
    <div className="todo-app">
      <AddForm addTodo={handleAdd} />
      <TaskList
        todos={todos}
        deleteTodo={handleDelete}
        toggleTodo={handleToggle}
      />
    </div>
  )
}

export default App
