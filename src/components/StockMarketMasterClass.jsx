import { useEffect } from 'react';
// import LazyLoad from 'react-lazyload';
import AOS from 'aos';
import 'aos/dist/aos.css';
import review from "../assets/review.jpg"

function StockMarketMasterClass() {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 py-16 px-4" id="pay">
            <div
                className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-8"
                data-aos="fade-up"
            >
                <h1
                    className="text-4xl font-bold text-center text-blue-600 mb-6"
                    data-aos="zoom-in"
                >
                    SAVE AND INVEST YOUR WAY OUT OF POVERTY
                </h1>
                <p className="text-lg text-gray-700 mb-4" data-aos="fade-right">
                    If you look around, you will see that people are building houses.
                    Every weekend, someone is getting married to their heart-rob ♥. That
                    should tell you that money is plenty everywhere.
                </p>
                <p className="text-lg text-gray-700 mb-4" data-aos="fade-left">
                    But, my question to you is: do you have plenty of money, or are you
                    struggling with lack of money problems?
                </p>
                <p className="text-lg text-gray-700 mb-4" data-aos="fade-right">
                    As a financial coach who has helped many people become millionaires
                    through investment and savings schemes, I can tell you that there is
                    a lot of money in the Nigerian stock market.
                </p>
                <p className="text-lg text-gray-700 mb-4 font-semibold" data-aos="fade-left">
                    That&apos;s what I&apos;m here to show you.
                </p>
                <p className="text-lg text-gray-700 mb-4" data-aos="fade-up">
                    Last year, Dangote Cement paid over{' '}
                    <span className="font-bold">511 Billion Naira</span> to those who
                    bought shares in their company. Also, UBA Bank has paid over{' '}
                    <span className="font-bold">95 Billion Naira</span> as dividends for
                    those who bought shares in their company.
                </p>
                <p className="text-lg text-gray-700 mb-4" data-aos="zoom-in">
                    You too can cash out. Financial freedom is possible if you follow
                    someone who knows the road.
                </p>
                <p className="text-lg text-gray-700 mb-6 font-semibold" data-aos="zoom-in">
                    I can show you the way.
                </p>
                <h2
                    className="text-2xl font-bold text-center text-blue-500 mb-6"
                    data-aos="zoom-in"
                >
                    See My Students&apos; Results Below 👇
                </h2>
                {/* <LazyLoad height={200} once> */}
                <div className="bg-gray-100 p-4 rounded-md mb-6" data-aos="fade-up">
                    <p className="text-center text-lg font-medium text-gray-700">
                        <img src={review} alt="" />
                    </p>
                </div>
                {/* </LazyLoad> */}
                <p className="text-lg text-gray-700 text-center mb-8" data-aos="fade-up">
                    Now that you&apos;ve seen the possibilities, click the link below to make
                    payment for the{' '}
                    <span className="font-bold">Stock Market Master Class Course.</span>
                </p>
                <div className="flex justify-center" data-aos="zoom-in">
                    <a
                        href="https://paystack.com/pay/h4nss8kzr2"
                        className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600"
                    >
                        Make Payment
                    </a>
                </div>
            </div>
        </div>
    );
}

export default StockMarketMasterClass;
