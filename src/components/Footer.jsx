export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white min-h-[30vh] px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold mb-3">FindMyDoctor</h2>
          <p className="text-sm text-gray-400">
            Your trusted partner in finding verified and experienced doctors across India. Book appointments with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/finddoctor" className="hover:text-white">Find Doctors</a></li>
            <li><a href="/map" className="hover:text-white">Doctors Map</a></li>
            <li><a href="#" className="hover:text-white">Book Appointment</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: support@findmydoctor.in</li>
            <li>Phone: +91 98765 43210</li>
            <li>Address: 123 Health Street, Delhi, India</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-gray-300">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Twitter</a>
            <a href="#" className="hover:text-white">Instagram</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
        © 2025 FindMyDoctor — All rights reserved.
      </div>
    </footer>
  );
}

