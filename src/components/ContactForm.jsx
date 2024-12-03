import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function ContactForm() {
    return (
        <div className="py-16 bg-blue-500 text-white" data-aos="fade-right">
            <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
            <div className="max-w-4xl mx-auto text-center">
                <p className="mb-4">I’d love to hear from you! Reach out for inquiries or consultations.</p>
                <div className="flex justify-center space-x-6">
                    <a
                        href="mailto:financialcoach@example.com"
                        className="flex items-center space-x-2"
                    >
                        <FaEnvelope className="text-xl" />
                        <span>Email</span>
                    </a>
                    <a href="tel:+2348133984181" className="flex items-center space-x-2">
                        <FaPhone className="text-xl" />
                        <span>Call</span>
                    </a>
                    <a
                        href="https://wa.me/+2348133984181"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                    >
                        <FaWhatsapp className="text-xl" />
                        <span>WhatsApp</span>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
