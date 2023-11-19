import PropTypes from 'prop-types';

const Introduction = (props) => {
    return (
        <div className="mt-12">
            <h1 className='text-2xl'>Halo nama saya, <b>{props.name}</b>. Age: {props.age}</h1>
        </div>
    );
}

Introduction.propTypes = {
    name: PropTypes.string,
    age: PropTypes.string,
};

Introduction.defaultProps = {
    name: "Kurniawan",
    age: "20",
};


export default Introduction;