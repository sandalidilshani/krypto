import Image from "next/image";
import HomeContent from "../components/Home";
import FeaturedOn from "../components/FeaturedOn"
import Analytics from "../components/Analytics"
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import './globals.css'
export default function Home() {
  return (
    <div className= "bg-gradient-to-br from-blue-900 to-black ">
      <HomeContent />
      <FeaturedOn/>
     <Analytics/>
     <Testimonials/>
     <Footer/>
    </div>
  );
}
