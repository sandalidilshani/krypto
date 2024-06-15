/* eslint-disable @next/next/no-img-element */
import React from "react";

function FeaturedOn() {
  return (
    <div className="flex flex-col px-4 md:px-10 lg:px-20 xl:px-60 text-white py-10">
      <div className="mb-4 flex items-start">
        <p className="text-lg font-semibold">FEATURED ON</p>
      </div>
      <div className="flex flex-wrap justify-center items-center mb-10 px-4 md:px-10 lg:px-8 xl:px-32 space-x-4 md:space-x-12 lg:space-x-16 xl:space-x-36 h-auto md:h-[100px] w-full lg:w-[1163px] bg-featurednavcolor">
        <img
          alt="TechCrunch"
          src="/image/techcrunch.png"
          width="164"
          height="61"
          className="object-contain"
        />
        <img
          alt="FastCompany"
          src="/image/fast.png"
          width="145"
          height="23"
          className="object-contain"
        />
        <img
          alt="MIT"
          src="/image/3.png"
          width="59"
          height="33"
          className="object-contain"
        />
        <img
          alt="Forbes"
          src="/image/for.png"
          width="99"
          height="25"
          className="object-contain"
        />
      </div>
      <div className="flex flex-col lg:flex-row w-full lg:w-[1002px] h-auto lg:h-[467px] p-4 lg:p-10">
        <div className="flex justify-center lg:justify-start">
          <img
            src="/image/featured.png"
            alt="featuredImage"
            className="w-full lg:w-[495px] h-auto lg:h-[467px]"
          />
        </div>

        <div className="flex flex-col max-w-full lg:max-w-2xl py-4 px-4 lg:px-16 w-full lg:w-[499px]">
          <p className="text-sm font-bold">ANALYTICS</p>
          <p className="text-3xl lg:text-5xl font-bold mb-4">
            Built-In Analytics <br />To Track Your NFTs
          </p>
          <p className="text-lg mb-6">
            Use our built-in analytics dashboard to pull valuable insights and
            monitor the value of your Krypto portfolio over time.
          </p>
          <button
            className="bg-customPurple rounded-full text-white font-semibold hover:bg-purple-700"
            style={{ padding: '21px 68px' }}
          >
            VIEW OUR PRICING
          </button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedOn;
