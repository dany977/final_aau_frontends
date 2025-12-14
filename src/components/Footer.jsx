import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Farm Management System
          </h3>
          <p className="text-sm">
            Manage farms, animals, and users efficiently using a modern
            digital platform.
          </p>
        </div>

        {/* News */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Latest News
          </h3>
          <ul className="space-y-2 text-sm">
            <li>🌱 New animal tracking feature released</li>
            <li>🚜 Farm performance dashboard added</li>
            <li>🔐 Improved system security</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact
          </h3>
          <p className="text-sm">Email: support@farmprofile.com</p>
          <p className="text-sm">Phone: +251 9xx xxx xxx</p>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} Farm Profile. All rights reserved.
      </div>
    </footer>
  );
}
