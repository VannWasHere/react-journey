const menuItems = ['Home', 'Pages', 'About'];

const NavigationBar = () => {
    return (
        <header>
            <nav className="flex justify-between bg-slate-600 w-full p-12 text-white">
                <h1 className="text-3xl font-bold tracking-wider uppercase">My react journey</h1>
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
                <h2 className="text-2xl">Justine Donovan</h2>
            </nav>
        </header>
    )
}

export default NavigationBar;