'use client'

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { ThemeIcon } from './icons';


export const ThemeSwitcher: React.FC<{}> = () => {
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
            return <div onClick={() => setTheme('dark')} className='w-7 h-7'> 
                <ThemeIcon theme='light' className='button' />
            </div>
        case 'dark':
            return <div onClick={() => setTheme('light')} className='w-7 h-7'> 
                <ThemeIcon theme={theme} className='button' />
            </div>
        default:
            return <div> ??????? </div>
    }
}
