import PropTypes from 'prop-types'
import { Button } from "../Button"
import { useState } from 'react'

export const AddForm = ({ addTodo }) => {

  const [newTask, setNewTask] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()


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
        callback={() => addTodo()}
      />
    </form>
  )
}

AddForm.propTypes = {
  addTodo: PropTypes.func,
}

export default AddForm