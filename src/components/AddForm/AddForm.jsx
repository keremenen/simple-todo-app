import PropTypes from 'prop-types'
import { Button } from "../Button"
import { useState } from 'react'

export const AddForm = ({ addTodo }) => {

  const [newTask, setNewTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTask === '') return
    addTodo(newTask)

  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onInput={(e) => setNewTask(e.target.value)}
      />
      <Button
        text={'Add new task'}
      />
    </form>
  )
}

AddForm.propTypes = {
  addTodo: PropTypes.func,
}

export default AddForm