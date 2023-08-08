import PropTypes from 'prop-types'
import Button from '../Button'

export const SingleTask = ({ id, title, deleteTodo, toggleTodo, checked }) => {
  return (
    <li id={id}>
      <input type='checkbox' checked={checked} onChange={() => toggleTodo(id, checked)} />
      <span>{title}</span>
      <Button
        text={'Delete'}
        callback={() => deleteTodo(id)}
      />
    </li>
  )
}

SingleTask.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  checked: PropTypes.bool,
  deleteTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
}

export default SingleTask