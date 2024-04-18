import { useState } from 'react';
import { Switch } from '@headlessui/react';

const ToggleSwitch = ({
    value = false,
    onToggle,
    srLabel = 'toggle switch',
}) => {
    return (
        <>
            <Switch
                checked={value}
                onChange={onToggle}
                className={`${value ? 'bg-green-600' : 'bg-red-600'} relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75`}
            >
                <span className='sr-only'>{srLabel}</span>
                <span
                    aria-hidden='true'
                    className={`${value ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                />
            </Switch>
        </>
    );
};

export default ToggleSwitch;
