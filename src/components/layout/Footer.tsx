import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
<div>
  <h3 className="text-xl font-bold mb-4">USP Corporation</h3>
  <p className="text-gray-300 mb-4">
    Malaysia's trusted provider of industrial lifts, SHE compliance, and construction since 2002.
  </p>
  <div className="flex space-x-4">
    <a
      href="https://www.facebook.com/share/19ri1qgBY3/?mibextid=wwXIfr" // <- Replace with your real URL
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-primary-400 transition-colors"
    >
      <Facebook size={20} />
    </a>
    <a
      href="http://linkedin.com/in/uspcorporation-sdn-bhd-6393b9375"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-primary-400 transition-colors"
    >
      <Linkedin size={20} />
    </a>
    <a
      href="https://www.instagram.com/usp.corporations?igsh=MXZsNmt5enk1ZzIzbQ=="
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-primary-400 transition-colors"
    >
      <Instagram size={20} />
    </a>
  </div>
</div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Past Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-white transition-colors">Goods Hoists</li>
              <li className="text-gray-300 hover:text-white transition-colors">Elevators</li>
              <li className="text-gray-300 hover:text-white transition-colors">SHE Compliance</li>
              <li className="text-gray-300 hover:text-white transition-colors">Construction Works</li>
              <li className="text-gray-300 hover:text-white transition-colors">Due Diligence</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary-400" />
                <span className="text-gray-300">15-1, Jalan 2/116B, Kuchai Entrepreneur Park,Off Jalan Klang Lama, 58200, Malaysia</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+60 123115165</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary-400" />
                <span className="text-gray-300">Uspcorporation88@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-primary-400" />
                <span className="text-gray-300">Mon–Fri, 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} USP Corporation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;