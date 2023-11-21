import PropTypes from 'prop-types'

const ListContact = ({contact}) => {
    return (
        <div className="w-full">
        <h2 className="text-2xl font-bold">Daftar Kontak</h2>
            {contact.map((item, key) => (
                <li key={key} className="flex p-3 items-center border border-dashed border-slate-700 rounded-3xl mt-3">
                <div>
                    <img className="rounded-full w-14 mr-2" src={item.imageUrl} alt="" />
                </div>
                <div className="border-l m-3 pl-5">
                    <p>{item.name}</p>
                    <p className="mt-1">{item.tag}</p>
                </div>
            </li>
            ))}
        </div>
    );
}

ListContact.propTypes = {
    contact: PropTypes.array,
}

export default ListContact;