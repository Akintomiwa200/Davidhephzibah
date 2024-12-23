// import LazyLoad from 'react-lazyload';
import david from "../assets/david2.jpg"


function About() {
    return (
        <div className="py-16 bg-white" data-aos="fade-left">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
                {/* <LazyLoad> */}
                <img
                    src={david}
                    alt="Financial Coach"
                    className="w-full md:w-1/2 rounded-lg shadow-lg"
                />
                {/* </LazyLoad> */}
                <div className="mt-8 md:mt-0 md:ml-8 text-center md:text-left">
                    <h2 className="text-3xl font-bold mb-4">About Me</h2>
                    <p className="text-gray-700">
                        My Name is David Hephzibah.
                        <br />

                        I&apos;m a seasoned financial coach with over four Yeas of experience helping individuals and businesses master their finances and achieve their dreams.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;
