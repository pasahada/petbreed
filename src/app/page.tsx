import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Welcome to PetBreed</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Your ultimate resource for pet breed information, care tips, and more.</p>
            <div className="flex justify-center gap-4">
              <Link href="/breeds" className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition duration-300">
                Explore Breeds
              </Link>
              <Link href="/signup" className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-lg font-medium transition duration-300">
                Sign Up
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-blue-500 text-4xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">Breed Explorer</h3>
                <p className="text-gray-600">Discover detailed information about hundreds of dog and cat breeds.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-blue-500 text-4xl mb-4">📋</div>
                <h3 className="text-xl font-semibold mb-2">Care Guides</h3>
                <p className="text-gray-600">Access comprehensive care guides tailored to specific breeds.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="text-blue-500 text-4xl mb-4">👥</div>
                <h3 className="text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-600">Connect with other pet owners and share your experiences.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Join our community today and discover everything you need to know about your pet.</p>
            <Link href="/signup" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium text-lg transition duration-300">
              Sign Up Now
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
