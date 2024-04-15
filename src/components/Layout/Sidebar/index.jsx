import { NavLink } from 'react-router-dom';
import Collapsible from '../../Collapsible';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <aside className='sidebar'>
            <div className='sidebar__header sticky top-0 border-b bg-white' />

            <ul className='sidebar__list'>
                <li className='sidebar__list-item'>
                    <NavLink to={'/'} className='sidebar__link'>
                        First Link
                    </NavLink>
                </li>
                <li className='sidebar__list-item'>
                    <button
                        type='button'
                        onClick={toggleCollapse}
                        className='sidebar__link dropdown__toggle'
                    >
                        Link Btn
                        <div
                            className={`ml-auto transition-all duration-150 ease-out ${isOpen ? '-rotate-180' : ''}`}
                        >
                            <FaChevronDown />
                        </div>
                    </button>

                    <Collapsible open={isOpen}>
                        <ul>
                            <li>
                                <NavLink
                                    to={'/455'}
                                    className='sidebar__link dropdown__link'
                                >
                                    Link
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/test'}
                                    className='sidebar__link dropdown__link'
                                >
                                    Link
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={'/test'}
                                    className='sidebar__link dropdown__link'
                                >
                                    Link
                                </NavLink>
                            </li>
                        </ul>
                    </Collapsible>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
