import { useState } from 'react';
import ToggleSwitch from '../../components/ToggleSwitch';

const Home = () => {
    const [enabled, setEnabled] = useState(false);

    const handleToggle = () => {
        setEnabled((prev) => !prev);
    };

    return (
        <>
            <div className='h- relative flex flex-1 bg-teal-400'>
                <div className='w-2/3 flex-shrink-0 bg-yellow-400'>
                    <div className='mb-4 flex items-center gap-4 bg-red-400 p-4'>
                        <h4 className='text-xl font-medium'>Home</h4>
                    </div>
                    <div className='mb-4 flex items-center gap-4 bg-green-400'>
                        <div className='rounded-md bg-white p-4'>
                            Temperature Level
                        </div>
                        <div className='rounded-md bg-white p-4'>
                            Humidity Level
                        </div>
                        <div className='rounded-md bg-white p-4'>
                            Current energy usage
                        </div>
                    </div>
                    <div className=''>
                        <ToggleSwitch onToggle={handleToggle} value={enabled} />
                    </div>
                </div>
                <div className='w-1/3 flex-shrink-0 bg-blue-400'>
                    <div className='mb-4 rounded-md bg-white p-4'>
                        Security status
                    </div>
                    <div className='mb-4 rounded-md bg-white p-4'>
                        Recent activity log
                    </div>
                    <div className='relative mb-4 overflow-x-auto rounded-lg bg-white p-4'>
                        <table className='w-full text-left'>
                            <thead className='bg-gray-100'>
                                <tr>
                                    <th
                                        scope='col'
                                        className='px-4 py-3 font-semibold text-slate-500'
                                    >
                                        E-mail
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-4 py-3 text-center font-semibold text-slate-500'
                                    >
                                        Role
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-4 py-3 text-center font-semibold text-slate-500'
                                    >
                                        Account Status
                                    </th>
                                    <th
                                        scope='col'
                                        className='px-4 py-3 text-center font-semibold text-slate-500'
                                    >
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='divide-y'></tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
