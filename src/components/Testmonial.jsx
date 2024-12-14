import { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaUsers, FaUser } from "react-icons/fa"; // Importing icons from react-icons

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote:
        "It's been awesome and wholesome, you are a master in the game sir. So it's been helpful really. I will just try to put more money.",
      image: "/images/testimonial7.jpg",
      name: "Anonymous",
      company: "Client 1",
    },
    {
      quote:
        "Seriously, boss has been a great blessing to me, especially on this KDP journey. He has made me grow financially and also ensure I don't spend anyhow.",
      image: "/images/testimonial6.jpg",
      name: "Coach David Hephzibah",
      company: "KDP Client",
    },
    {
      quote:
        "Stock marketing Masterclass course by Coach David is the best financial Education class I have attended. I could remember how I have been struggling to manage my finances.",
      image: "/images/testimonial5.jpg",
      name: "Gabriel Onifade Aka Coach Gabriel",
      company: "Stock Education Client",
    },
    {
      quote:
        "If there is one thing I have learned from you coach, it is POSITIVE MINDSET. You have let me know that no matter the level of our income, we can still invest.",
      image: "/images/testimonial4.jpg",
      name: "Oluwafunmilayo",
      company: "Investment Client",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    intervalRef.current = setInterval(nextSlide, 3000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const handleManualSlide = (action) => {
    clearInterval(intervalRef.current);
    if (action === "next") nextSlide();
    else prevSlide();
    intervalRef.current = setInterval(nextSlide, 3000);
  };

  return (
    <section id="testimonials" className="py-10 bg-white text-gray-800">
      <div className="container px-5 mx-auto text-center">
        <FaUsers className="w-10 h-10 text-gray-500 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-800 mb-12">
          Client Testimonials
        </h1>
        {/* Slider Content */}
        <div className="relative overflow-hidden max-w-4xl mx-auto">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              width: `${testimonials.length * 100}%`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-shrink-0 p-6 flex justify-center"
              >
                <div className="bg-gray-100 p-8 rounded-lg text-left w-full shadow-lg">
                  <FaUser className="w-8 h-8 text-gray-500 mb-4" />
               <p
                  className="leading-relaxed mb-6 break-all w-[80%] "
                  style={{ wordWrap: "break-word", overflowWrap: "break-word", whiteSpace: "normal" }}
                >
                 {testimonial.quote}</p>
                  <div className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src={testimonial.image}
                      className="w-12 h-12 rounded-full object-cover object-center"
                    />
                    <span className="flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-600 text-sm uppercase">
                        {testimonial.company}
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => handleManualSlide("prev")}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-300 text-gray-700 rounded-full p-2 hover:bg-gray-400 focus:outline-none"
          >
            <FaChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleManualSlide("next")}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 text-gray-700 rounded-full p-2 hover:bg-gray-400 focus:outline-none"
          >
            <FaChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
