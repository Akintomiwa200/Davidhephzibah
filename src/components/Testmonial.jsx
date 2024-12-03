import PropTypes from "prop-types";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


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

const NextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
    >
        <FaArrowRight size={20} />
    </button>
);

NextArrow.propTypes = {
    onClick: PropTypes.func,
};


const PrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600"
    >
        <FaArrowLeft size={20} />
    </button>
);

PrevArrow.propTypes = {
    onClick: PropTypes.func,
};


const TestimonialSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="py-16 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
            <div className="max-w-4xl mx-auto relative">
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-6 text-center">
                            <div className="flex flex-col items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-24 h-24 rounded-full object-cover mb-4"
                                />
                                <p className="text-lg italic text-gray-700 mb-4">
                                    &quot;{testimonial.text}&quot;
                                </p>
                                <h4 className="text-xl font-semibold text-gray-900">
                                    - {testimonial.name}
                                </h4>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSlider;
