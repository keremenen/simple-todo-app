import PropTypes from 'prop-types'

export const Button = ({ text, callback }) => {
	return (
		<button onClick={callback}>
			{text}
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	callback: PropTypes.func,
}

export default Button