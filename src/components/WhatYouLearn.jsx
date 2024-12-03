function WhatYouLearn() {
    const topics = [
        " How to build money mindset",
        " How to invest your money without losing your capital",
        " Stocks and shares to buy with at least 50% within 6 months",
        " Monthly webinar on investment and money management",
        " How to save for your children's school fees without getting depressed or stressed",
        " How to make more money from the Stock Market",
        " How to identify profitable stocks and shares to buy on a weekly basis",
        " How to understand Risk management in the Stock Market",
        " Free one-on-one session with me to discuss your investment plan",
        " How to know legitimate investments and scam investments",
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
                        <h4 className="mr-4">✅</h4>
                        {topic}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WhatYouLearn;
