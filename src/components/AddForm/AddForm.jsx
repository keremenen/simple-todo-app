import PropTypes from 'prop-types'
import styles from './AddForm.module.css'
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
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={newTask}
        onInput={(e) => setNewTask(e.target.value)}
      />
      <Button
        className={styles.addBTN}
        text={'Add new task'}
      />
    </form>
  )
}

AddForm.propTypes = {
  addTodo: PropTypes.func,
}

export default AddForm