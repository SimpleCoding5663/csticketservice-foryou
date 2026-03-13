import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-500 px-6 py-12">
      <div className="footer-top max-w-7xl mx-auto grid gap-8 
      grid-cols-1 
      md:grid-cols-2 
      lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">

        {/* Aside */}
        <aside>
          <h2 className="text-xl font-bold text-gray-300">CS — Ticket System</h2>
          <p className="text-base mt-3">
              Here you get a modern helpdesk platform designed to streamline customer support. Organize tickets, collaborate with your team, and provide quick solutions to your customers.
          </p>
        </aside>

        {/* Company */}
        <div>
          <h6 className="text-gray-300 font-semibold mb-3">Company</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-white">About Us</a></li>
            <li><a className="hover:text-white">Our Mission</a></li>
            <li><a className="hover:text-white">Contact Sales</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h6 className="text-gray-300 font-semibold mb-3">Services</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-white">Products & Services</a></li>
            <li><a className="hover:text-white">Customer Stories</a></li>
            <li><a className="hover:text-white">Download Apps</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h6 className="text-gray-300 font-semibold mb-3">Information</h6>
          <ul className="space-y-2">
            <li><a className="hover:text-white">Privacy Policy</a></li>
            <li><a className="hover:text-white">Terms & Conditions</a></li>
            <li><a className="hover:text-white">Join Us</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h6 className="text-gray-300 font-semibold mb-3">Social Links</h6>
          <ul className="space-y-2">
            <li className="flex gap-2 items-center">
              <i className="fa-brands fa-x-twitter"></i> @CS — Ticket System
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-brands fa-instagram"></i> @CS — Ticket System
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-brands fa-facebook"></i> @CS — Ticket System
            </li>
            <li className="flex gap-2 items-center">
              <i className="fa-solid fa-envelope"></i> support@cs.com
            </li>
          </ul>
        </div>

      </div>
      <div className='footer-bottom max-w-7xl mx-auto border-t-2 border-gray-500 mt-20'>
        <div class="text-sm text-center text-gray-500 mt-8">
          @ CS — Ticket System 2026. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;


