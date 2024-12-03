import { FaChartLine, FaWallet, FaLightbulb } from 'react-icons/fa';

const services = [
    { icon: FaChartLine, title: 'Financial Planning', description: 'Tailored plans to grow your wealth.' },
    { icon: FaWallet, title: 'Budget Management', description: 'Efficient budgeting strategies.' },
    { icon: FaLightbulb, title: 'Investment Advice', description: 'Smart investments for a secure future.' },
];

function Services() {
    return (
        <div className="py-16 bg-gray-100" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                {services.map((service, idx) => (
                    <div key={idx} className="p-6 bg-white shadow-md rounded-lg text-center">
                        <service.icon className="text-blue-500 text-4xl mb-4" />
                        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-700">{service.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Services;
