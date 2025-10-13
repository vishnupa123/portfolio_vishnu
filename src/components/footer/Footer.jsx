import React from 'react';
import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdHome, MdMailOutline, MdPhone, MdPrint } from 'react-icons/md';


const Footer = () => {
  const socialLinks = [
    { icon: FaFacebookF, href: '#!' },
    { icon: FaTwitter, href: '#!' },
    { icon: FaGoogle, href: '#!' },
    { icon: FaInstagram, href: '#!' },
    { icon: FaLinkedinIn, href: '#!' },
    { icon: FaGithub, href: '#!' },
  ];

  const products = ['Job Portal App', 'Movie App', 'Music App', 'Eletronics Website'];
  const usefulLinks = ['Y', 'Become an Affiliate', 'Shipping Rates', 'Help'];

  return (
    <footer id='footer' className=" lg:mt-8 bg-gradient-to-r from-white via-pink-400 to-violet-300 text-white text-sm">
      {/* Social Networks Section */}
      <div className="p-4 border-b border-white/30">
        <div className="max-w-6xl mx-auto flex justify-between items-center flex-wrap">
          <p className="mb-2 md:mb-0">Get connected with us on social networks:</p>
          <div className="flex space-x-4">
            {socialLinks.map((Link, index) => (
              <a
                key={index}
                href={Link.href}
                className="text-white hover:text-gray-300 transition duration-300"
                aria-label={Link.icon.name.replace('Fa', '')}
              >
                <Link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content in One Row */}
      <div className="max-w-6xl mx-auto py-10  flex flex-wrap justify-between items-start gap-4">
        {/* Company & Logo */}
        <div className="flex-1 min-w-[200px]">
         
          <h6 className="uppercase font-bold mb-2">Company Name</h6>
          <p className="text-gray-200">
            We create interactive, responsive, and modern web applications efficiently.
          </p>
        </div>

        {/* Products */}
        <div className="flex-1 min-w-[150px]">
          <h6 className="uppercase font-bold mb-2">Projects</h6>
          <ul className="space-y-1">
            {products.map((product, index) => (
              <li key={index}>
                <a href="#!" className="hover:text-white transition">{product}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div className="flex-1 min-w-[150px]">
          <h6 className="uppercase font-bold mb-2">Useful Links</h6>
          <ul className="space-y-1">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <a href="#!" className="hover:text-white transition">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1 min-w-[200px]">
          <h6 className="uppercase font-bold mb-2">Contact</h6>
          <ul className="space-y-1 text-gray-200">
            <li className="flex items-center gap-2">
              <MdHome className="h-4 w-4" /> Nedumangad TVM
            </li>
            <li className="flex items-center gap-2">
              <MdMailOutline className="h-4 w-4" /> vishnupanil999@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MdPhone className="h-4 w-4" /> 9809978217
            </li>
            <li className="flex items-center gap-2">
              <MdPrint className="h-4 w-4" /> +01 234 567 89
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center p-3 bg-gradient-to-r from-white via-pink-400 to-violet-300 text-gray-200">
        © {new Date().getFullYear()} vishnu.com
      </div>


      
    </footer>
  );
};

export default Footer;
