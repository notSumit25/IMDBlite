import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { FiLinkedin, FiGithub, FiInstagram } from 'react-icons/fi';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Movie App',
  description: 'Welcome to the Movie App',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-gray-800 py-4">
          <div className="container mx-auto flex justify-between items-center px-4">
            <h1 className="text-2xl font-bold text-white">Movie App</h1>
            <ul className="flex space-x-10 text-white mr-4">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/now-playing">Now Playing</Link>
              </li>
              <li>
                <Link href="/top-rated">Top Rated</Link>
              </li>
              <li>
                <Link href="/upcoming">Upcoming</Link>
              </li>
              <li>
                <Link href="/tv-shows">TV Shows</Link>
              </li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-800 text-white text-center py-4">
      <div className="flex justify-center space-x-6">
        <a href="https://www.linkedin.com/in/sumit-garg-056b8b23a/" target="_blank" rel="noopener noreferrer">
          <FiLinkedin size={24} />
        </a>
        <a href="https://github.com/notSumit25" target="_blank" rel="noopener noreferrer">
          <FiGithub size={24} />
        </a>
        <a href="https://www.instagram.com/sumit___garg/" target="_blank" rel="noopener noreferrer">
          <FiInstagram size={24} />
        </a>
      </div>
      <p className="mt-2">Made by Sumit</p>
    </footer>
      </body>
    </html>
  );
}
