import SingleTask from "../SingleTask"
import PropTypes from 'prop-types'
import styles from './TaskList.module.css'

const TaskList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul className={styles.taskListWrapper}>
      {todos.length !== 0 ?
        todos.map(todo => (
          <SingleTask
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
        :
        <p className={styles.info}>No data to display</p>
      }
    </ul>
  )
}

TaskList.propTypes = {
  todos: PropTypes.array,
  deleteTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
}

export default TaskList