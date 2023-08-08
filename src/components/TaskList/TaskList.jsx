import SingleTask from "../singleTask/SingleTask"
import PropTypes from 'prop-types'

const TaskList = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <ul>
      {todos ?
        todos.map(todo => (
          <SingleTask
            id={todo.id}
            title={todo.title}
            checked={todo.checked}
            key={todo.id}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        ))
        :
        <p>No data to display</p>
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