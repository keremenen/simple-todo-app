import SingleTask from "../singleTask/SingleTask"
import PropTypes from 'prop-types'

const TaskList = ({ todos, deleteTodo }) => {
  return (
    <ul>
      {todos ?
        todos.map(todo => (
          <SingleTask
            id={todo.id}
            title={todo.title}
            key={todo.id}
            deleteTodo={deleteTodo}
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
}

export default TaskList