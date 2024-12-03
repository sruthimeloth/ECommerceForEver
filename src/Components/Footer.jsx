import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-10">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-60 my-10 lg:mt-40 text-sm">
        {/* Logo and Description */}
        <div className="flex flex-col items-center lg:items-start">
          <img
            className="mb-5 w-24 md:w-28 lg:w-35"
            src={assets.logo}
            alt="Logo"
          />
          <p className="text-center lg:text-left w-full md:w-2/3 text-gray-600">
            LOREM IPSUM IS SIMPLY DUMMY TEXT OF THE PRINTING AND TYPES SETTINGS
            INDUSTRY
          </p>
        </div>

        {/* Company Links */}
        <div className="text-center lg:text-left">
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center lg:text-left">
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-234-224-5678</li>
            <li>sruthimeloth@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copy right @2024 forever.com-All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
