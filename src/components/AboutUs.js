import React, { useState, useRef } from 'react';
import Gambar1 from '../assets/gambar4.jpg';
import Gambar2 from '../assets/gambar5.jpg';
import Gambar3 from '../assets/gambar6.jpg';
import Gambar4 from '../assets/gambar14.jpg';
import backgroundImage from '../assets/gambar5.jpg';

const AboutUs = () => {
  const [faqOpen, setFaqOpen] = useState(null); // Manage FAQ open/close state
  const answerRef = useRef([]);

  const toggleFAQ = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="w-full font-roboto">
        {/* Background Image Section */}
        <div
          className="w-full h-[300px] md:h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
          }}
        ></div>
      </section>

      {/* Content Section */}
      <section className="content py-16 bg-gray-100">
        <div className="px-4 md:px-10 py-8 md:py-10 text-left text-black flex flex-col items-start max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">About Us</h1>
          <p className="text-base md:text-lg leading-relaxed">
            We are committed to delivering high-quality services and solutions
            with the highest standards of excellence and reliability. By
            constantly evolving and embracing innovation, we strive to set new
            benchmarks in the industry. Moreover, we are deeply dedicated to
            contributing to the welfare and progress of the Indonesian nation by
            supporting sustainable development and enhancing the quality of life
            for communities. Through our efforts, we aim to play a significant
            role in advancing Indonesia’s economic growth, particularly in the
            critical area of energy infrastructure.
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="header text-center py-8">
            <h1 className="text-3xl font-semibold">ABOUT US</h1>
          </div>

          <div className="about-us-content">
            <div className="about-us-image grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <img
                src={Gambar1}
                className="w-full max-w-xs md:max-w-full h-auto object-cover mx-auto"
                alt="About Us 1"
              />
              <img
                src={Gambar2}
                className="w-full max-w-xs md:max-w-full h-auto object-cover mx-auto"
                alt="About Us 2"
              />
              <img
                src={Gambar3}
                className="w-full max-w-xs md:max-w-full h-auto object-cover mx-auto"
                alt="About Us 3"
              />
            </div>
            <p className="text-center md:text-left text-base md:text-lg">
              Our company established in 2007, starting with CV (Commanditaire Vennootschap),
              which later change into PT (Limited Liability Company). From the beginning, we
              have already concentrated in provision service and procurement of goods in
              electrical and mechanical sector. We are committed to always meet the best
              quality standard. Thus, to intensify the service and the commitment, we changed
              into PT. DECO INTERNUSA CEMERLANG in 2013.
              At the moment, we have gained trust from International corporation, such as
              leading battery charger manufacturer in Europe, PMI and also electrical
              manufacturer, which are Schneider, ABB and Siemens.
              As a company that always fulfill integrity, PT. Deco lnternusa Cemerlang always
              innovates endlessly by increasing knowledge, pursuing perfection in electrical
              field and advancing human resources.
            </p>

          </div>
        </div>
      </section>




      <section className="vision py-16 bg-gray-100">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center gap-8">
          {/* Vision Image */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img
              src={Gambar1}
              className="w-full md:w-2/4 h-auto object-cover"
              alt="Vision"
            />
          </div>
          {/* Vision Text */}
          <div className="md:w-1/2 flex flex-col justify-center text-left md:text-left">
            <h2 className="text-3xl font-bold mb-5">Vision</h2>
            <p className="text-lg">
              To become a leading, professional, and trustworthy corporate in trading and
              contractor field by focusing on electrical sector and to have a big contribution in
              increasing Indonesia’s prosperity while maintaining as a highly dedicated and
              committed company.

            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission py-16 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:items-center gap-8">
          {/* Mission Text */}
          <div className="md:w-1/2 flex flex-col justify-center text-left md:text-left order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-5">Mission</h2>
            <p className="text-lg">
              • Providing the best service professionally, creatively and systematically.</p>
            <p>•  Instill and uphold highly productive, effective and efficiency values.</p>
            <p>•  Establishing a good cooperation toward domestic and foreign business
              partners, both in the short and long term.</p>
          </div>
          {/* Mission Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <img
              src={Gambar4}
              className="w-full md:w-3/4 h-auto object-cover"
              alt="Mission"
            />
          </div>
        </div>
      </section>





      {/* FAQ Section */}
      <section className="faq py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">FAQ</h2>

          {/* FAQ Item 1 */}
          <div
            className="faq-item mb-4 p-4 border border-gray-300 rounded-lg shadow-sm"
            onClick={() => toggleFAQ(0)}
          >
            <div className="faq-question flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-medium">What is Electrik's main product?</h3>
              <span className="text-xl font-bold">{faqOpen === 0 ? '-' : '+'}</span>
            </div>
            <div
              ref={(el) => (answerRef.current[0] = el)}
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                maxHeight: faqOpen === 0 ? `${answerRef.current[0]?.scrollHeight}px` : '0',
                opacity: faqOpen === 0 ? 1 : 0,
                paddingTop: faqOpen === 0 ? '1px' : '0',
              }}
            >
              <p className="text-gray-700">
                Electrik's main product is a state-of-the-art website builder designed for ease of use and flexibility.
              </p>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div
            className="faq-item mb-4 p-4 border border-gray-300 rounded-lg shadow-sm"
            onClick={() => toggleFAQ(1)}
          >
            <div className="faq-question flex justify-between items-center cursor-pointer">
              <h3 className="text-lg font-medium">Is Electrik's website builder easy to use?</h3>
              <span className="text-xl font-bold">{faqOpen === 1 ? '-' : '+'}</span>
            </div>
            <div
              ref={(el) => (answerRef.current[1] = el)}
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                maxHeight: faqOpen === 1 ? `${answerRef.current[1]?.scrollHeight}px` : '0',
                opacity: faqOpen === 1 ? 1 : 0,
                paddingTop: faqOpen === 1 ? '1px' : '0',
              }}
            >
              <p className="text-gray-700">
                Yes, Electrik's website builder is designed to be user-friendly and accessible for all skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
