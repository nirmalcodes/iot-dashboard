import { useEffect, useRef, useState } from 'react';

const Collapsible = ({ open = false, children }) => {
    const wrapperRef = useRef(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (wrapperRef.current) {
            const elHeight = wrapperRef.current?.scrollHeight;
            setHeight(elHeight);
        }
        return () => {};
    }, [children, wrapperRef.current]);

    return (
        <div
            ref={wrapperRef}
            className='overflow-hidden transition-all duration-200 ease-out'
            style={{ maxHeight: open ? height : 0 }}
        >
            {children}
        </div>
    );
};

export default Collapsible;
