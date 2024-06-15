// components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-10 px-60">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">KRYPTO</h2>
        </div>
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16">
          <div>
            <h3 className="text-lg font-semibold mb-4">KRYPTO</h3>
            <ul>
              <li className="mb-2">Home</li>
              <li className="mb-2">About</li>
              <li className="mb-2">Buy NFTs</li>
              <li className="mb-2">Sell NFTs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">MARKET</h3>
            <ul>
              <li className="mb-2">Browse NFTs</li>
              <li className="mb-2">Buy NFTs</li>
              <li className="mb-2">Sell NFTs</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
            <ul>
              <li className="mb-2">Email</li>
              <li className="mb-2">LinkedIn</li>
              <li className="mb-2">Instagram</li>
              <li className="mb-2">Twitter</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 md:mt-0">
          <h3 className="text-lg font-semibold mb-4">JOIN OUR NEWSLETTER</h3>
          <form className="flex">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 rounded-l-full bg-white text-dark-blue focus:outline-none"
            />
            <button className="px-6 py-2 bg-purple-600 text-white rounded-r-full hover:bg-purple-700 focus:outline-none">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
