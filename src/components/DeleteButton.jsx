import PropTypes from 'prop-types';

const DeleteButton = (props) => {
    return(
        <button className="bg-red-600 rounded-lg text-white p-2" onClick={props.onClick}>Delete</button>
    );
}

DeleteButton.propTypes = {
    onClick: PropTypes.any,
}

export default DeleteButton;