const Main = ({ children }) => {
    return (
        <>
            <main className='main'>
                <div className='sidebar__header' />
                {children}
            </main>
        </>
    );
};

export default Main;
