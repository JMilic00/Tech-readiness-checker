import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

interface RootLayoutProps {
  children: ReactNode;
}

import Nav from "@/components/nav";


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <Nav /> 
        </header>

        {children}

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-left">
              <h2>YourBrand</h2>
              <p>© 2026 YourBrand. All rights reserved.</p>
            </div>

            <div className="footer-center">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>

            <div className="footer-right">
              <p>Follow us</p>
              <div className="socials">
                <a href="#">Facebook</a>
                <a href="#">Twitter</a>
                <a href="#">Instagram</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}