'use client'

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';


const ThemeSwitcher: React.FC<{}> = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true)
    }, []);

    if (!mounted) {
        return <div> aaaa </div>;
    }
    
    switch (theme) {
        case 'light':
            return <div onClick={() => setTheme('dark')} className='text-white'> dark </div>
        case 'dark':
            return <div onClick={() => setTheme('light')} className='text-black'> light </div>
        default:
            return <div> ??????? </div>
    }
}

export default ThemeSwitcher;