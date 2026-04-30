import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: "Tech Readiness Checker",
  description: "Assess your startup's technical readiness",
};

interface RootLayoutProps {
  children: ReactNode;
}

import Nav from "@/components/homepage/nav/nav";


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <Nav /> 
        </header>

        {children}

        <footer className="footer">
        </footer>
      </body>
    </html>
  );
}