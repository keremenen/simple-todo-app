import SingleTask from "../singleTask/SingleTask"
import PropTypes from 'prop-types'

const TaskList = ({ todos }) => {
  return (
    <ul>
      {todos ?
        todos.map(todo => (
          <SingleTask
            id={todo.id}
            title={todo.title}
            key={todo.id}
          />
        ))
        :
        <p>No data to display</p>
      }
    </ul>
  )
}

TaskList.propTypes = {
  todos: PropTypes.array
}

export default TaskList