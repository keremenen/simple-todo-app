import PropTypes from 'prop-types'

export const SingleTask = ({ id, title }) => {
  return (
    <li id={id}>
      <span>{title}</span>
    </li>
  )
}

SingleTask.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
}

export default SingleTask