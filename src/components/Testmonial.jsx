import { useEffect, useRef } from "react";

const TestimonialScroller = () => {
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
    ];

    const scrollerRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollerRef.current) {
                scrollerRef.current.scrollBy({
                    top: 100,
                    behavior: "smooth",
                });
            }
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-16 bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">
                What Our Clients Say
            </h2>
            <div className="relative overflow-hidden max-w-xl mx-auto h-64 bg-white rounded-lg shadow-lg">
                <div
                    ref={scrollerRef}
                    className="flex flex-col space-y-6 overflow-y-auto h-full px-6 py-4"
                >
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="text-center">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full shadow-md mb-4"
                            />
                            <p className="text-gray-700 italic text-sm sm:text-base">
                                &quot;{testimonial.text}&quot;
                            </p>
                            <h4 className="text-lg font-semibold text-gray-900 mt-2">
                                - {testimonial.name}
                            </h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialScroller;
