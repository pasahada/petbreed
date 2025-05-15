import Link from 'next/link';
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            PetBreed
          </Link>
          <div className="space-x-4">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About
            </Link>
            <Link href="/dashboard" className="hover:text-gray-300">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};


