import { useState, useEffect, useRef } from "react";

const TestimonialSlider = () => {
    const testimonials = [
        {
            name: "Jane Doe",
            text: "This coaching has transformed my finances! I went from paycheck-to-paycheck to saving and investing confidently.",
            image: "/images/testimonial1.jpg",
        },
        {
            name: "John Smith",
            text: "The investment strategies I learned here have given me a steady income. Highly recommended!",
            image: "/images/testimonial2.jpg",
        },
        {
            name: "Emily Johnson",
            text: "I finally understand how to make my money work for me. This program is life-changing!",
            image: "/images/testimonial3.jpg",
        },
         {
        name: "Oluwafunmilayo",
        text: "If there is one thing I have learned from you coach, it is POSITIVE MINDSET. You have let me know that no matter the level of our income, we can still invest, and no amount is too small for investment. You made me realize that if I invest from the little that I have now, I am training myself to invest when I have high income. I also like the constant encouragement and the fact you lead by example, showing us what is possible by investing with small amounts, just to show us what is possible. Lastly, your act of service—the way you respond to us on the group when we have challenges. And you do that with HUMILITY.",
        image: "/images/testimonial4.jpg", 
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
        <div className="py-16 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
                Testimonies from Our Previous Students
            </h2>
            <div className="relative w-[90vw] max-w-[900px] mx-auto h-80 bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Testimonial Content */}
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
                            className="w-[75vw] lg-[80vw] mx-auto flex-shrink-0 flex flex-col items-center text-center px-4 sm:px-6 py-6"
                            style={{ width: "100%" }}
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full shadow-md mb-4"
                            />
                            <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                                &quot;{testimonial.text}&quot;
                            </p>
                            <h4 className="text-lg font-semibold text-gray-900 mt-2">
                                - {testimonial.name}
                            </h4>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => handleManualSlide("prev")}
                    className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 text-gray-900 bg-white rounded-full shadow-md p-2 hover:bg-gray-200 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
                <button
                    onClick={() => handleManualSlide("next")}
                    className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 text-gray-900 bg-white rounded-full shadow-md p-2 hover:bg-gray-200 focus:outline-none"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default TestimonialSlider;
