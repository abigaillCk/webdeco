import React from 'react';
import Instagram from '../assets/ig.png';
import Youtube from '../assets/yt.png';
import Twitter from '../assets/twit.png';
import WA from '../assets/wa.png';


const ContactUs = () => {
    return (
        <>

        {/* Contact Us Section */}
        <div className="container mx-auto p-6 md:p-12 font-sans">
                <div className="text-center mb-8">
                </div>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap">
                    {/* Location Section */}
                    <div className="flex-1 w-full md:max-w-full mb-8 order-1 md:order-none">
                        <iframe
                            title="PT Deco Internusa Cemerlang Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378.71858172245885!2d101.41926563143116!3d0.48785022412346474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d5a92a276b4255%3A0x54322c5e41a17243!2sPT%20DECO%20INTERNUSA%20CEMERLANG!5e0!3m2!1sid!2sid!4v1725845024376!5m2!1sid!2sid"
                            className="w-full h-80 border-0"
                            allowFullScreen
                            loading="lazy">
                        </iframe>
                    </div>

                    {/* Social Media Section */}
                    <div className="flex flex-col items-center gap-6 text-center order-2 md:order-none">
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">Follow our social media</h4>
                        <div className="flex gap-5">
                            <a href="https://www.instagram.com/decopekanbaru/" target="_blank" rel="noopener noreferrer">
                                <img src={Instagram} alt="Instagram" className="w-10 h-10 cursor-pointer hover:opacity-70" />
                            </a>
                            <a href="https://x.com/ptdicpku?s=11" target="_blank" rel="noopener noreferrer">
                                <img src={Twitter} alt="Twitter" className="w-10 h-10 cursor-pointer hover:opacity-70" />
                            </a>
                            <a href="https://youtube.com/@decotv2007?si=xIXkY8StLHUslSiV" target="_blank" rel="noopener noreferrer">
                                <img src={Youtube} alt="YouTube" className="w-10 h-10 cursor-pointer hover:opacity-70" />
                            </a>
                            <a href="https://wa.me/62xxxxxx" target="_blank" rel="noopener noreferrer">
                                <img src={WA} alt="WhatsApp" className="w-10 h-10 cursor-pointer hover:opacity-70" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* Content Section */}
            <section className="content py-16 bg-gray-100">
                <div className="px-4 md:px-10 py-8 md:py-10 text-left text-black flex flex-col items-start max-w-5xl mx-auto">
                    <h1 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us</h1>
                    <p className="text-base md:text-lg leading-relaxed">
                        At PT Deco Internusa Cemerlang, we value every inquiry and are committed
                        to providing prompt and personalized responses to all your questions. Whether
                        you are looking for more information about our services, want to discuss a new
                        project, or need support, our team is here to assist you. You can reach us via phone,
                        email, or visit our office at the address below. Additionally, follow us on social media
                        to stay updated with our latest news and projects. We look forward to hearing from
                        you and helping you achieve your business goals
                    </p>
                </div>
            </section>





            

        </>
    );
};

export default ContactUs;
