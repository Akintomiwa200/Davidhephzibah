import { useState, useEffect, useRef } from "react";

const TestimonialSlider = () => {
    const testimonials = [
        {
            name: "Anonymous",
            text: "It's been awesome and wholesome, you are a master in the game sir. So it's been helpful really. I will just try to put more money.",
            image: "/images/testimonial7.jpg",
        },
        {
            name: "Coach David Hephzibah",
            text: "My own story go long oooo. Seriously, boss has been a great blessing to me, especially on this KDP journey. He has made me grow financially and also ensure I don't spend anyhow.",
            image: "/images/testimonial6.jpg",
        },
        {
            name: "Gabriel Onifade Aka Coach Gabriel",
            text: "Stock marketing Masterclass course by Coach David is the best financial Education class I have attended. I could remember how I have been struggling to manage my finances until I accessed the class on his status.",
            image: "/images/testimonial5.jpg",
        },
        {
            name: "Oluwafunmilayo",
            text: "If there is one thing I have learned from you coach, it is POSITIVE MINDSET. You have let me know that no matter the level of our income, we can still invest.",
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
        <div className="py-8 sm:py-12 bg-gray-50">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-10 text-gray-900">
                Testimonies from Our Previous Students
            </h2>
            <div className="relative w-full mx-auto max-w-7xl overflow-hidden">
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
                            className="w-full flex-shrink-0 px-6 py-8 flex flex-col items-center text-center bg-white"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-md mb-4"
                            />
                            <p className="text-gray-700 text-sm sm:text-base leading-relaxed break-words whitespace-normal max-w-[90%] md:max-w-lg">
                                &quot;{testimonial.text}&quot;
                            </p>
                            <h4 className="text-lg font-semibold text-gray-900 mt-4">
                                - {testimonial.name}
                            </h4>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={() => handleManualSlide("prev")}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 text-gray-900 rounded-full shadow p-2 hover:bg-gray-300 focus:outline-none"
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
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 text-gray-900 rounded-full shadow p-2 hover:bg-gray-300 focus:outline-none"
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
