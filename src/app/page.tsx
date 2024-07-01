'use client'; 
import Image from "next/image";
import HomeContent from "../components/home/Home";
import Headers from "../components/header/Header"
import FeaturedOn from "../components/feature/FeaturedOn"
import Analytics from "../components/analytics/Analytics"
import Testimonials from "../components/testimonial/Testimonials";
import Footer from "../components/footer/Footer";
import Headersection from "../lib/headerData";
import './globals.css'
import { useEffect, useState } from "react";

export default function Home() {
 


  return (
    <div className= "bg-gradient-to-br from-blue-900 to-black ">
      <Headers />
      <HomeContent />
      <FeaturedOn/>
     <Analytics/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}
