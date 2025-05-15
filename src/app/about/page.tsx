import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-8 text-center">About PetBreed</h1>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-lg mb-6">
                PetBreed is a comprehensive platform dedicated to providing accurate and detailed information about various pet breeds. 
                Our mission is to help pet owners and enthusiasts make informed decisions about pet care, selection, and training.
              </p>
              
              <p className="text-lg mb-6">
                Founded in 2025, PetBreed has quickly become a trusted resource for pet lovers around the world. 
                Our team of veterinarians, animal behaviorists, and pet care specialists work tirelessly to ensure 
                that all information provided is accurate, up-to-date, and helpful.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Our Mission</h2>
              <p className="text-lg mb-6">
                At PetBreed, we believe that understanding your pet&apos;s breed-specific needs is essential for providing 
                the best care possible. Our mission is to make this information accessible to everyone, helping to 
                create stronger bonds between pets and their owners.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Our Team</h2>
              <p className="text-lg mb-6">
                Our diverse team of pet enthusiasts brings together expertise from various fields including veterinary 
                medicine, animal behavior, nutrition, and training. This multidisciplinary approach ensures that we 
                provide comprehensive and well-rounded information.
              </p>
              
              <h2 className="text-2xl font-semibold mt-10 mb-4">Contact Us</h2>
              <p className="text-lg">
                Have questions or suggestions? We&apos;d love to hear from you! Reach out to us at 
                <a href="mailto:info@petbreed.com" className="text-blue-600 hover:underline"> info@petbreed.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
