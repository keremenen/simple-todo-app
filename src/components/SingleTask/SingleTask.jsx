import PropTypes from 'prop-types'
import Button from '../Button'

export const SingleTask = ({ id, title }) => {
  return (
    <li id={id}>
      <span>{title}</span>
      <Button
        text={'Delete'}
        callback={() => console.log('Button clicked!')}
      />
    </li>
  )
}

SingleTask.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
}

export default SingleTask