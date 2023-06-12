import PropTypes from 'prop-types'
const Button = ({text, color, onClick}) => {
    // const onClick = (e) => {console.log(e)}
    return(
        <button
            onClick={onClick} 
            style={{ backgroundColor: color}} 
            className="btn">
                {text}
        </button>
    )
}

Button.defaulProps = {
    color: "#d93e0f"
}

// validation
Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}


export default Button