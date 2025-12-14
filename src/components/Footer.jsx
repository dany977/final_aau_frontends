export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      {/* News / Updates Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Farm Management System
          </h3>
          <p className="text-sm">
            Manage farms, animals, and users efficiently with a modern system.
          </p>
        </div>

        {/* Latest News */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Latest News
          </h3>
          <ul className="space-y-3 text-sm">
            <li>🌱 New farm registration feature released</li>
            <li>🐄 Animal tracking module improved</li>
            <li>🔐 Security update for user accounts</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Newsletter
          </h3>
          <p className="text-sm mb-3">
            Subscribe to get the latest updates
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 rounded-l-lg text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 px-4 py-2 rounded-r-lg hover:bg-green-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Farm Management System. All rights reserved.
      </div>
    </footer>
  );
}
