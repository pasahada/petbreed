import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
            
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Welcome to your PetBreed Dashboard</h2>
                <p className="text-gray-600">
                  This is a protected page that requires authentication. In a complete implementation, 
                  this page would show personalized content based on the logged-in user&apos;s data from Supabase.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                  <h3 className="text-lg font-medium mb-2">My Pets</h3>
                  <p className="text-gray-600 mb-4">Manage your pet profiles and information.</p>
                  <button className="text-blue-600 hover:text-blue-800">View Pets →</button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                  <h3 className="text-lg font-medium mb-2">Saved Breeds</h3>
                  <p className="text-gray-600 mb-4">Access your saved breed information.</p>
                  <button className="text-blue-600 hover:text-blue-800">View Saved Breeds →</button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                  <h3 className="text-lg font-medium mb-2">Care Reminders</h3>
                  <p className="text-gray-600 mb-4">Set and manage care reminders for your pets.</p>
                  <button className="text-blue-600 hover:text-blue-800">Manage Reminders →</button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-300">
                  <h3 className="text-lg font-medium mb-2">Community Posts</h3>
                  <p className="text-gray-600 mb-4">View and manage your community contributions.</p>
                  <button className="text-blue-600 hover:text-blue-800">View Posts →</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
