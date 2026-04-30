import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
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