const Introduction = (props) => {
    return (
        <div className="mt-5">
            <h1 className='text-2xl'>Halo nama saya, <b>{props.name}</b>. Age: {props.age}</h1>
        </div>
    );
}


export default Introduction;