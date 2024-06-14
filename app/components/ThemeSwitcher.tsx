'use client'

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ThemeIcon } from './icons';


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
            return <div onClick={() => setTheme('dark')} className='text-th-background w-7 h-7'> 
                <ThemeIcon theme='light' className='text-th-background' />
            </div>
        case 'dark':
            return <div onClick={() => setTheme('light')} className='text-th-background w-7 h-7'> 
                <ThemeIcon theme={theme} className='text-th-background' />
            </div>
        default:
            return <div> ??????? </div>
    }
}

export default ThemeSwitcher;