import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-6 md:py-10 px-4 md:px-12 lg:px-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">KRYPTO</h2>
          <p className="text-sm">The secure marketplace for NFTs</p>
        </div>
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 max-md:font-bold">KRYPTO</h3>
            <ul>
              <li className="mb-2"><a href="#">Home</a></li>
              <li className="mb-2"><a href="#">About</a></li>
              <li className="mb-2"><a href="#">Buy NFTs</a></li>
              <li className="mb-2"><a href="#">Sell NFTs</a></li>
            </ul>
          </div>
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 max-md:font-bold">MARKET</h3>
            <ul>
              <li className="mb-2"><a href="#">Browse NFTs</a></li>
              <li className="mb-2"><a href="#">Buy NFTs</a></li>
              <li className="mb-2"><a href="#">Sell NFTs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2 max-md:font-bold">CONTACT</h3>
            <ul>
              <li className="mb-2"><a href="#">Email</a></li>
              <li className="mb-2"><a href="#">LinkedIn</a></li>
              <li className="mb-2"><a href="#">Instagram</a></li>
              <li className="mb-2"><a href="#">Twitter</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <h3 className="text-lg font-semibold mb-2">JOIN OUR NEWSLETTER</h3>
          <form className="flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Email Address"
              className="px-4 py-2 mb-2 md:mb-0 md:mr-2 rounded-l-full bg-white text-dark-blue focus:outline-none"
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
