const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center flex-1 p-8">
            <h2 className="md:text-4xl text-3xl font-bold lg:mb-9 mb-4 text-center drop-shadow-lg text-gray-800">Contact Us</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
                {/* Contact Information Section */}
                <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col justify-center">
                    <h3 className="text-2xl font-semibold text-white mb-4">Get in Touch</h3>
                    <p className="text-white mb-4 opacity-80">We'd love to hear from you! Whether you have questions about our club, events, or anything else, feel free to reach out.</p>
                    <h4 className="font-semibold text-white text-2xl mb-3">Contact Information:</h4>
                    <ul className="list-disc list-inside text-white opacity-80">
                        <li>Email: <a href="mailto:itclub@example.com" className="text-yellow-300 hover:underline">compactlab360@gmail.com</a></li>
                        <li>Phone: <a href="tel:+1234567890" className="text-yellow-300 hover:underline">(123) 456-7890</a></li>
                        <li>Address: Compact Polytechnic Institute, Academy Road, Feni, Bangladesh</li>
                    </ul>
                </div>

                {/* Map Section */}
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 ">
                    <h3 className="text-2xl font-semibold text-white mb-1">Our Location</h3>
                    <p className="text-white mb-4 opacity-70">Find us at the following address:</p>
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14688.236187074841!2d91.4028114!3d23.0216041!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753684afc440b5b%3A0x2ee267d49828ebb5!2z4KaV4Kau4KeN4Kaq4KeN4Kav4Ka-4KaV4KeN4KafIOCmquCmsuCmv-Cmn-Cnh-CmleCmqOCmv-CmlSDgpofgpqjgprjgp43gpp_gpr_gpp_gpr_gpongpp8gKOCmuOCmv-CmquCmv-CmhuCmhyksIOCmq-Cnh-CmqOCngA!5e0!3m2!1sbn!2sbd!4v1730214808820!5m2!1sbn!2sbd"
                        width="100%"
                        height="300"
                        className="border-0 rounded-lg"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;