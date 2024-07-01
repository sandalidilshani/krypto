import Image from "next/image";
import kryptousers from '@/lib/testimonialsData';
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonialData, setTestimonialData] = useState([]);

  useEffect(() => {
    getKryptousers();
  }, []);

  const getKryptousers = async () => {    
    const res = await kryptousers(); 
    console.log(res);  
    setTestimonialData(res.kryptousers);
  };
  
  return (
    <div className="bg-dark-blue text-white py-16">
      <div className="container mx-auto text-center">
        <p className="text-2xl font-bold text-customPurple">TESTIMONIALS</p>
        <p className="text-6xl font-bold leading-tight md:leading-snug">
          Read What Others <br />
          Have To Say
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 pt-12 md:pt-20">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="max-w-xs text-center md:text-left">
              <div className="mb-4">
                <Image
                  alt={testimonial.name}
                  className="rounded-full mx-auto"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="mt-2 text-sm md:text-base">{testimonial.feedback}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 mx-4 md:mx-24 bg-cardColor py-8 md:py-12 rounded-lg text-center">
          <p className="text-3xl font-bold mb-4">Are You Ready?</p>
          <p className="text-xl mb-6 text-custom-cyan">
            Be A Part Of The Next Big Thing
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 focus:outline-none">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
