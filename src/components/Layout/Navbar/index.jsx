import { useState } from 'react';
import { FaBars, FaUser } from 'react-icons/fa6';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleSidebarToggle = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            <header className={`navbar ${isOpen && 'sidebar--open'}`}>
                <button
                    type='button'
                    onClick={handleSidebarToggle}
                    className='mr-2 rounded-full p-2 leading-none transition-all duration-150 ease-in-out hover:bg-gray-100'
                >
                    <FaBars />
                </button>
                <div className='font-medium'>IOT Dashboard</div>
                <div className='ml-auto'>
                    <button
                        type='button'
                        className='rounded-full p-2 leading-none ring-0 transition-all duration-150 ease-in-out hover:bg-gray-100 focus:ring-transparent'
                    >
                        <FaUser />
                    </button>
                </div>
            </header>
        </>
    );
};

export default Navbar;
