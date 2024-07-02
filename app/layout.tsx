import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TSProvider } from "./providers";
import Navbar from "./components/Navbar";
import NewCursor from "./components/NewCursor";
import ThemeSwitcher from "./components/ThemeSwitcher";
import './styles/cursor.css'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: ":D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} mx-auto min-h-screen justify-center items-center overflow-x-hidden hide-scrollbars
      bg-th-background text-th-foreground transition-colors duration-500`}>
        <TSProvider> 
          <div className="theme-switcher-container"> <ThemeSwitcher /> </div>
          <NewCursor />
          <Navbar />
          <main>{children}</main>
        </TSProvider>
      </body>
    </html>
  );
}
