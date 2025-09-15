import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TSProvider } from "./providers";
import Navbar from "./components/Navbar";
import NewCursor from "./components/NewCursor";
import './styles/cursor.css'
import { Noto_Sans_Mono, Gayathri } from 'next/font/google'

const inter = Inter({ subsets: ["latin"] });
const noto_mono = Noto_Sans_Mono({ subsets: ["latin"] });
const gayathri = Gayathri({ subsets: ['latin'], weight: ['100', '400', '700'] });
 
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
      <body className={`${gayathri.className} mx-auto min-h-screen justify-center items-center overflow-x-hidden hide-scrollbars
      bg-th-background text-th-foreground transition-colors duration-500`}>
        <TSProvider> 
          <NewCursor />
          <Navbar />
          <main>{children}</main>
        </TSProvider>
      </body>
    </html>
  );
}
