'use client'
import { ThemeProvider } from "next-themes"

export function TSProvider({ children }: { children: React.ReactNode }) {
    return (<ThemeProvider defaultTheme='light'>
        {children}
    </ThemeProvider>)
}