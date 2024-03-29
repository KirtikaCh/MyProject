import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 pt-6 pb-1">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center pb-10 pt-4">
        <div>
          <img src="" alt="" />
        </div>
  <div className="text-center px-10 ">
    <h2 className="text-xl font-semibold">Stay Connected</h2>
    <p className="pt-2 text-[18px]">Follow us on social media for updates</p>
    <div className="flex justify-center pt-4">
      <a href="#" className="px-4 hover:text-blue-500">
        <FaTwitter className="text-blue-400 text-2xl" />
      </a>
      <a href="#" className="px-4 hover:text-blue-500">
        <FaFacebook className="text-blue-400 text-2xl" />
      </a>
      <a href="#" className="px-4 hover:text-blue-500">
        <FaInstagram className="text-blue-400 text-2xl" />
      </a>
      <a href="#" className="px-4 hover:text-blue-500">
        <FaLinkedin className="text-blue-400 text-2xl" />
      </a>
    </div>
  </div>
  <div>
    <ul className="flex justify-center text-lg">
      <li className="px-4">
        <a href="#" className="hover:text-blue-500">About</a>
      </li>
      <li className="px-4">
        <a href="#" className="hover:text-blue-500">Services</a>
      </li>
      <li className="px-4">
        <a href="#" className="hover:text-blue-500">Contact</a>
      </li>
    </ul>
  </div>
</div>

      <div className="bg-gray-700 text-sm py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <p className="pt-2">Designed by <span className="text-blue-400 font-semibold">Kirtika</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
