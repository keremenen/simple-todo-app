import { useEffect, useState } from "react"
import './App.css'
import TaskList from "./components/TaskList"
import AddForm from "./components/AddForm"



function App() {
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem('TASK-LIST')
    if (!localData) return []
    return JSON.parse(localData)
  })

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
    const currentDate = new Date()
    setTodos(prevState => {
      return [...prevState, {
        title: title,
        id: Math.floor(Math.random() * 1000),
        checked: false,
        date: `${currentDate.getHours()}:${currentDate.getMinutes()} ${currentDate.getDay()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`
      }]
    })
  }

  useEffect(() => {
    window.localStorage.setItem('TASK-LIST', JSON.stringify(todos))
  }, [todos])

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
