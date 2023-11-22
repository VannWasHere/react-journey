import PropTypes from 'prop-types'
import DeleteButton from '../components/DeleteButton';

const ListContact = ({contact}) => {
    return (
        <div className="w-full">
        <h2 className="text-2xl font-bold">Daftar Kontak</h2>
            {contact.map((item, key) => (
                <li key={key} className="flex p-3 items-center border border-dashed border-slate-700 rounded-3xl mt-3">
                <div>
                    <img className="rounded-full w-14 mr-2" src={item.imageUrl} alt={item.name} />
                </div>
                <div className="border-l w-full m-3 pl-5 flex justify-between items-center">
                    <div>
                        <p className='tracking-widest'>{item.name}</p>
                        <p className="mt-1 underline italic text-blue-500">@{item.tag}</p>
                    </div>
                    <DeleteButton />
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