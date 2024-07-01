/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import AnalyticSection from "@/lib/analyticsData";

export default function AnalyticsSection() {
  const [analyticsData, setAnalyticsData] = useState();

  useEffect(() => {
    getAnalyticsData();
  }, []);

  const getAnalyticsData = async () => {
    const res = await AnalyticSection();
    console.log(res.analytics[0]);
    setAnalyticsData(res.analytics[0]);
    return;
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between text-white py-6 px-4 lg:px-60">
      <div className="text-center lg:text-left mb-10 lg:mb-0 max-w-lg">
        <p className="text-sm font-bold text-purple-300">
          {analyticsData?.title}
        </p>
        <p className="text-3xl lg:text-5xl font-bold mt-2 mb-4">
          {analyticsData?.maintitle}
        </p>
        <p className="text-lg mb-6">
          {analyticsData?.subtitle}
        </p>
        <button
          className="bg-purple-600 rounded-full text-white font-semibold hover:bg-purple-700"
          style={{ padding: "21px 68px" }}
        >
          {analyticsData?.button}
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
