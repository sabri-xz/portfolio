import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TSProvider } from "./providers";
import Navbar from "./components/Navbar";

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
      <body className={`${inter.className} mx-auto min-h-screen justify-center items-center
      bg-th-background text-th-foreground`}>
        <TSProvider> 
          <Navbar />
          {children} 
        </TSProvider>
      </body>
    </html>
  );
}
