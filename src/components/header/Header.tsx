import { log } from 'console';
import React, { useEffect, useState } from 'react';
import Headersection from "@/lib/headerData";

export default function Header() {
  const [data,setHeaderData]=useState();
  useEffect(() => {
    getHeadrData()

  },[]);
  const getHeadrData = async () => {
    const res= await Headersection()
    console.log(res)
    setHeaderData(res.headers[0]);
    return;
  }
  return (
    <div>
      <header className="absolute top-0 w-full p-6 px-12 lg:px-28 flex justify-between items-center max-md:flex-col">
        <div className="text-lg font-bold">Krypto</div>
        <nav className="space-x-8 md:space-x-8">
          <a href="#" className="hover:underline">
            {data?.about}
          </a>
          <a href="#" className="hover:underline">
            {data?.pricing}
          </a>
          <a href="#" className="hover:underline">
            {data?.contact}
          </a>
          <a href="#" className="hover:underline">
            {data?.buyNfts}
          </a>
        </nav>
      </header>
    </div>
  );
}
