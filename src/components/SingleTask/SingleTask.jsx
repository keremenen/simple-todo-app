import PropTypes from 'prop-types'
import Button from '../Button'
import styles from './SingleTask.module.css'

export const SingleTask = ({ todo: { id, title, checked, date }, toggleTodo, deleteTodo }) => {
  return (
    <li id={id} className={styles.wrapper} onClick={() => toggleTodo(id, checked)}>
      <input type='checkbox' checked={checked} onChange={() => toggleTodo(id, checked)} />
      <div className={styles.text}>
        <span className={checked ? styles.checked : ''}>{title}</span><br />
        <span className={styles.addedDate}>{date.getHours()}:{date.getMinutes()}, {date.getDay()}/{date.getMonth()}/{date.getFullYear()}</span>
      </div>
      <Button
        className={styles.delete}
        text={'Delete'}
        callback={() => deleteTodo(id)}
      />
    </li >
  )
}

SingleTask.propTypes = {
  id: PropTypes.number,
  todo: PropTypes.object,
  date: PropTypes.object,
  title: PropTypes.string,
  checked: PropTypes.bool,
  deleteTodo: PropTypes.func,
  toggleTodo: PropTypes.func,
}

export default SingleTask