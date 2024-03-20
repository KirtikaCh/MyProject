import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-lg font-semibold">Stay Connected</h2>
          <p className="mt-2">Follow us on social media for updates</p>
          <div className="flex justify-center md:justify-start mt-4">
            <a href="#" className="mr-4 hover:text-blue-500">
              <i className="fab fa-twitter text-blue-400 text-lg"></i>
            </a>
            <a href="#" className="mr-4 hover:text-blue-500">
              <i className="fab fa-facebook text-blue-400 text-lg"></i>
            </a>
            <a href="#" className="mr-4 hover:text-blue-500">
              <i className="fab fa-instagram text-blue-400 text-lg"></i>
            </a>
            <a href="#" className="mr-4 hover:text-blue-500">
              <i className="fab fa-linkedin text-blue-400 text-lg"></i>
            </a>
          </div>
        </div>
        <div>
          <ul className="flex justify-center md:justify-end">
            <li className="mx-4">
              <a href="#" className="hover:text-blue-500">About</a>
            </li>
            <li className="mx-4">
              <a href="#" className="hover:text-blue-500">Services</a>
            </li>
            <li className="mx-4">
              <a href="#" className="hover:text-blue-500">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-6 bg-gray-700 text-sm py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
          <p className="mt-2">Designed by<b className="fas fa-heart text-blue-400"> Kirtika</b></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
