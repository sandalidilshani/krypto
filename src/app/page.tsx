import Image from "next/image";
import HomeContent from "../components/home/Home";
import FeaturedOn from "../components/feature/FeaturedOn"
import Analytics from "../components/analytics/Analytics"
import Testimonials from "../components/testimonial/Testimonials";
import Footer from "../components/footer/Footer";
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
