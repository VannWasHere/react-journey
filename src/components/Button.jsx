import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button onClick={props.onClick} className="bg-slate-600 p-1 w-full text-white rounded-lg mt-5">{props.buttonText}</button>
    );
}

Button.propTypes = {
    buttonText: PropTypes.string,
    onClick: PropTypes.string,
}

export default Button;