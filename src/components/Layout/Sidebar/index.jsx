import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <>
            <aside className='sidebar'>
                <div className='sidebar__header' />

                <hr />

                <ul className='sidebar__list'>
                    <li className='sidebar__list-item'>
                        <NavLink to={'/'} className='sidebar__link'>
                            Link
                        </NavLink>
                    </li>
                    <li className='sidebar__list-item'>
                        <NavLink to={'/1'} className='sidebar__link'>
                            Link
                        </NavLink>
                    </li>
                    <li className='sidebar__list-item'>
                        <NavLink to={'/2'} className='sidebar__link'>
                            Link
                        </NavLink>
                    </li>
                    <li className='sidebar__list-item'>
                        <NavLink to={'/3'} className='sidebar__link'>
                            Link
                        </NavLink>
                    </li>
                    <li className='sidebar__list-item'>
                        <NavLink to={'/4'} className='sidebar__link'>
                            Link
                        </NavLink>
                    </li>
                </ul>
            </aside>
        </>
    );
};

export default Sidebar;
