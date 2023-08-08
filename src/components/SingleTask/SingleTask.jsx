import PropTypes from 'prop-types'
import Button from '../Button'

export const SingleTask = ({ id, title, deleteTodo }) => {
  return (
    <li id={id}>
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
  deleteTodo: PropTypes.func,
}

export default SingleTask