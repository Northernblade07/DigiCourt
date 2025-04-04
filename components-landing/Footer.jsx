import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBalanceScale,
  faEnvelope,
  faPhone,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-12" id="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FontAwesomeIcon icon={faBalanceScale} className="text-2xl" />
              <span className="text-xl font-semibold">NyayaSetu</span>
            </div>
            <p className="text-gray-300">
              Modernizing court operations through innovative technology solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#testimonials" className="hover:text-white">Testimonials</a></li>
              <li><a href="#footer" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">API Reference</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Training</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                support@nyayasetu.in
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                +1 (555) 123-4567
              </li>
              <li>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                Cyber City, Tower 3, Level 8<br />
                Gurugram, Haryana 122002
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-indigo-800 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2025 NyayaSetu. All rights reserved. | Made with pride in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;