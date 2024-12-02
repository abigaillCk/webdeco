import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#E42F46] text-white  py-10 mt-20">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">

          {/* Left Section */}
          <div className="flex flex-col items-center md:items-start md:flex-1">
            <img src={Logo} alt="Logo" className="w-36 mb-4 md:ml-0" />
            <h2 className="text-base font-normal md:ml-0">Offering the best <br /> dedication and commitment</h2>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col items-center md:items-start md:flex-1 mt-[-30px] md:mt-0">
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-sm text-center md:text-left">
              Jl. Soekarno Hatta komplek duta persada blok B <br />
              No, RT.6, Tengkerang Barat, Kec. Marpoyan Damai, <br />
              Kota Pekanbaru, Riau 28292
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-[#212121] text-white p-4 md:p-6 rounded-lg flex flex-col items-start md:flex-1 max-w-sm md:max-w-full mx-auto">
            <h3 className="text-xl font-semibold mb-6 md:mb-4 text-left">Contact us</h3>

            {/* Phone Section */}
            <div className="flex items-center justify-start mb-4 space-x-3">
              <i className="fas fa-phone-alt text-2xl"></i>
              <div className="text-left">
                <p className="font-semibold">Call us</p>
                <p className="text-sm"> 0761-6704341</p>
              </div>
            </div>

            {/* Email Section */}
            <div className="flex items-center justify-start space-x-3">
              <i className="fas fa-envelope text-2xl"></i>
              <div className="text-left">
                <p className="font-semibold">Email us</p>
                <p className="text-sm">deco.transgi@gmail.com</p>
                <p className="text-sm">decointernusa_cemerlang@yahoo.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


