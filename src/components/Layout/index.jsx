import Main from './Main';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Main>{children}</Main>
        </>
    );
};

export default Layout;
