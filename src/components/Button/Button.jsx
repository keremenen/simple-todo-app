import PropTypes from 'prop-types'
import styles from './Button.module.css'

export const Button = ({ text, callback, className }) => {
	return (
		<button onClick={callback} className={`${styles.button} ${className ? className : ''}`}>
			{text}
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	callback: PropTypes.func,
	className: PropTypes.string
}

export default Button