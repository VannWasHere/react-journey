import PropTypes from 'prop-types';

const menuItems = ['Home', 'Pages', 'About'];

const NavigationBar = (props) => {
    return (
        <header>
            <nav className="flex justify-between bg-slate-600 w-full p-12 text-white">
                <h1 className="text-3xl font-bold tracking-wider uppercase">{!props.navTitle ? "My Javascript Journey" : props.navTitle}</h1>
                <div>
                    <ul className="flex space-x-4 w-full text-lg font-bold">
                    {/* Making list with array map function */}
                    {menuItems.map((item, index) => (
                        <li key={index} className="transition duration-300 cursor-pointer hover:text-blue-600 tracking-wider">
                            {item}
                        </li>
                    ))}
                    </ul>
                </div>
                { props.name == "Anonymous" ? (
                    <h2 className='text-2xl text-black'>{props.name}</h2>
                ) : (
                    <h2 className='text-2xl'>Hei, {props.name} !</h2>
                )}
            </nav>
        </header>
    )
}

NavigationBar.propTypes = {
    name: PropTypes.string,
    navTitle: PropTypes.string,
}

NavigationBar.defaultProps = {
    name: "Anonymous",
    navTitle: "My Javascript Journey"
}

export default NavigationBar;