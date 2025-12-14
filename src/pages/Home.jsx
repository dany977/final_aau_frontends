import StatsCards from "../components/StatsCards";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-teal-600">
            Farm Management System
          </h1>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Manage farms, animals, and users efficiently using a modern digital platform.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4">
        <StatsCards />
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              Farms
            </h3>
            <p className="text-gray-600">
              Manage farm profiles, locations, and ownership information.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-blue-600 mb-2">
              Animals
            </h3>
            <p className="text-gray-600">
              Track animal health, breed, and farm assignment.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition">
            <h3 className="text-lg font-semibold text-purple-600 mb-2">
              Users
            </h3>
            <p className="text-gray-600">
              Secure login with role-based access control.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
