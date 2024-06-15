/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function AnalyticsSection() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-betwee text-white py-6 px-4 lg:px-60">
      <div className="text-center lg:text-left mb-10 lg:mb-0 max-w-lg">
        <p className="text-sm font-bold text-purple-300">ANALYTICS</p>
        <p className="text-3xl lg:text-5xl font-bold mt-2 mb-4">
          Built-In Analytics <br /> To Track Your NFTs
        </p>
        <p className="text-lg mb-6">
          Use our built-in analytics dashboard to pull valuable insights and
          monitor the value of your Krypto portfolio over time.
        </p>
        <button
          className="bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-700"
          style={{ padding: "21px 68px" }}
        >
          VIEW OUR PRICING
        </button>
      </div>
      <div className="flex justify-center items-center">
        <img
          src="/image/analytics.png"
          alt="Analytics"
          className="w-full lg:w-auto max-w-sm"
        />
      </div>
    </div>
  );
}

