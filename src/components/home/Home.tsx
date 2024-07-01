
import Image from "next/image";
import client from '../../lib/apolloClient'
import HomeSection from "@/lib/homeData"
import { use, useEffect, useState } from "react";
export default function Home() {
  const [homedata,setHomeData]=useState();
  useEffect(() => {
    getHomeData()

  },[]);
  const getHomeData = async () => {
    const res= await HomeSection()
    console.log(res)
    setHomeData(res.homes[0]);
    return;
  }

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-blue-900 to-black text-white">
      

      <div className="text-left mt-20 mx-15 md:mx-20 lg:mx-60 flex flex-col md:flex-row sm:flex-col-reverse justify-between">
        <div className="flex flex-col m-4 md:mr-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6">
            {homedata?.maintitle}
          </h1>

          <p className="mb-6 md:mb-12 text-base md:text-lg">
                {homedata?.subtitle}
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
            <button className="px-6 py-3 bg-purple-600 rounded-full text-white font-bold hover:bg-purple-700 transition">
             {homedata?.buyButton}
            </button>
            <button className="px-6 py-3 mt-4 md:mt-0 border-2 border-white rounded-full text-white font-bold hover:bg-white hover:text-black transition">
             {homedata?.sellButton}
            </button>
          </div>
        </div>

        <div className="relative px-12 mt-8 md:mt-0 flex w-full max-w-[400px] md:max-w-[488px] lg:max-w-[578px]">
          <Image
            src="/image/main.png"
            alt="NFT Illustration"
            layout="responsive"
            width={488}
            height={578}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
