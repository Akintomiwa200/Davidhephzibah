import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="py-8 bg-blue-500 text-white text-center">
            <p className="mb-4">&copy; 2024 Financial Coach. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
                 <a href="https://www.facebook.com/share/15Mp863VE3/">
                                 <FaFacebook className="text-xl" />
                </a>
         <a href="https://www.instagram.com/coach_davidhephzibah?igsh=YzljYTk1ODg3Zg==">
                      <FaInstagram className="text-xl" />
                    </a>
             //   <FaLinkedin className="text-xl" />
            </div>
        </footer>
    );
}

export default Footer;
