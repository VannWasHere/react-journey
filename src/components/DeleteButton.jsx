import PropTypes from 'prop-types';

const DeleteButton = ({id, onDelete}) => {
    return(
        <button className="bg-red-600 rounded-lg text-white p-2">Delete</button>
    );
}

DeleteButton.propTypes = {
    id: PropTypes.number,
}

export default DeleteButton;