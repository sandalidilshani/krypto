// components/Testimonials.js
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Olivia Cole",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      image: "/path/to/olivia-cole-image.png", // Replace with actual path to the image
    },
    {
      name: "Olivia Cole",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      image: "/path/to/olivia-cole-image.png", // Replace with actual path to the image
    },
    {
      name: "Olivia Cole",
      feedback:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.",
      image: "/path/to/olivia-cole-image.png", // Replace with actual path to the image
    },
  ];

  return (
    <div className="bg-dark-blue text-white py-16">
      <div className="container mx-auto text-center">
        <p className="text-2xl font-bold text-customPurple">TESTIMONIALS</p>
        <p className="text-6xl font-bold">
          Read What Others <br />
          Have To Say
        </p>

        <div className="flex justify-center space-x-8 pt-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="max-w-xs">
              <div className="mb-4">
                <Image
                  src="/image/user.png"
                  alt={testimonial.name}
                  className="rounded-full mx-auto"
                  width={100}
                  height={100}
                />
              </div>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="mt-4">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
        <div className="mt-16  mx-44 bg-cardColor  py-12 rounded-lg">
          <p className="text-3xl font-bold mb-4">Are You Ready?</p>
          <p className="text-xl mb-6 text-custom-cyan">
            Be A Part Of The Next Big Thing
          </p>
          <button className="bg-black text-white px-6 py-3 rounded-full">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
