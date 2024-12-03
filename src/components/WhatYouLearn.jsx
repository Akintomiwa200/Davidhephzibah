// import LazyLoad from 'react-lazyload';

function WhatYouLearn() {
    const topics = [
        "Mastering personal budgeting and expense tracking.",
        "Smart investment strategies for long-term growth.",
        "Debt management and reduction techniques.",
        "Building financial independence through side hustles.",
        "Retirement planning tailored to your goals.",
        "Understanding and leveraging tax benefits.",
    ];

    return (
        <div className="py-16 bg-gray-50" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-8">What You’ll Learn</h2>
            <div className="max-w-4xl mx-auto grid gap-6 px-4">
                {topics.map((topic, idx) => (
                    <div
                        key={idx}
                        className="p-4 bg-white shadow-md rounded-md text-lg flex items-center"
                    >
                        {/* <LazyLoad> */}
                            <img
                                src={`/icons/checkmark.webp`}
                                alt="Checkmark"
                                className="w-6 h-6 mr-3"
                            />
                        {/* </LazyLoad> */}
                        {topic}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhatYouLearn;
