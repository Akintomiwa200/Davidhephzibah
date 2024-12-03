import { useState } from 'react';
import { FaChartLine, FaWallet, FaLightbulb } from 'react-icons/fa';

const services = [
    { icon: FaChartLine, title: 'Financial Planning', description: 'Tailored plans to grow your wealth.' },
    { icon: FaWallet, title: 'Budget Management', description: 'Efficient budgeting strategies.' },
    { icon: FaLightbulb, title: 'Investment Advice', description: 'Smart investments for a secure future.' },
];

function Services() {
    const [showModal, setShowModal] = useState(false);
    const [receipt, setReceipt] = useState(null);

    // Handles receipt upload
    const handleReceiptUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setReceipt(file);
        }
    };

    // Handles submission of receipt
    const handleSubmit = () => {
        if (receipt) {
            const formData = new FormData();
            formData.append('file', receipt);

            // Create a pre-configured WhatsApp URL for sending media
            const whatsappNumber = '+2348133984181'; // Replace with your WhatsApp number
            const message = `Payment receipt uploaded by a user.`;
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            // Open WhatsApp in a new tab (to allow sending manually in real-time)
            window.open(whatsappURL, '_blank');

            alert('Thank you for your payment. Please ensure the receipt is sent via WhatsApp.');
            setShowModal(false);
        } else {
            alert('Please upload a receipt!');
        }
    };

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
            <a
                href="#"
                onClick={() => setShowModal(true)}
                className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg inline-block text-center"
            >
                Get Started
            </a>

            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                        <h3 className="text-xl font-semibold mb-4">Upload Receipt</h3>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleReceiptUpload}
                            className="mb-4 w-full border rounded-lg p-2"
                        />
                        <button
                            onClick={handleSubmit}
                            className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow"
                        >
                            Submit
                        </button>
                        <button
                            onClick={() => setShowModal(false)}
                            className="w-full mt-2 px-4 py-2 bg-gray-500 text-white rounded-lg shadow"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Services;
