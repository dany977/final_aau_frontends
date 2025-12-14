import FarmGrid from "../components/FarmGrid";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* Main Content */}
      <div className="flex-grow">
        {/* Hero Section */}
        <div className="relative">
          <img
            src="your-image-here.jpg"
            className="w-full h-96 object-cover"
          />

          <div className="absolute top-1/2 left-1/2 
            transform -translate-x-1/2 -translate-y-1/2 
            bg-white p-8 rounded-xl shadow">
            <h1 className="text-3xl font-bold text-center">
              Welcome to Farm Management System
            </h1>
            <p className="text-center text-gray-700">
              Manage your farms, animals, and users
            </p>
          </div>
        </div>

        {/* Farm Grid */}
        <div className="mt-10 p-6">
          <FarmGrid />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
