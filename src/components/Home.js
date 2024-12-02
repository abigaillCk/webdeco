import React, { useEffect, useState, useMemo } from 'react';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Gambar1 from '../assets/gambar11.jpg';
import Gambar2 from '../assets/1.png';
import Gambar3 from '../assets/2.png';
import Gambar from '../assets/gambar7.jpg';
import Gambar4 from '../assets/3.png';
import Gambar5 from '../assets/gambar10.jpg';
import Gambar6 from '../assets/gambar3.jpg';
import Gambar7 from '../assets/WEL .png';
import Logo1 from '../assets/a.png';
import Logo2 from '../assets/b.png';
import Logo3 from '../assets/c.png';
import Logo4 from '../assets/d.png';
import Logo5 from '../assets/e.png';
import Logo6 from '../assets/f.png';
import Logo7 from '../assets/g.png';
import Logo8 from '../assets/h.png';nnqq
import Logo9 from '../assets/i.png';
import Logo10 from '../assets/j.png';
import Logo11 from '../assets/k.png';
import Logo12 from '../assets/l.png';
import Logo13 from '../assets/m.png';
import Logo14 from '../assets/n.png';
import Logo15 from '../assets/o.png';
import Logo16 from '../assets/p.png';
import Logo17 from '../assets/q.png';
import useFetch from '../hooks/UseFetch';

const Home = () => {
  const [backgroundImage, setBackgroundImage] = useState(0); // Indeks gambar aktif
  const [isAnimating, setIsAnimating] = useState(false); // Untuk mengontrol animasi

  const backgroundImages = useMemo(() => [Gambar7, Gambar3, Gambar4, Gambar2], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true); // Mulai animasi
      setTimeout(() => {
        setBackgroundImage((prevIndex) => (prevIndex + 1) % backgroundImages.length);
        setIsAnimating(false); // Selesai animasi
      }, 1000); // Durasi animasi
    }, 5000); // Ganti gambar setiap 5 detik

    return () => clearInterval(interval); // Bersihkan interval saat komponen dilepas
  }, [backgroundImages]);



  const { data: newsData, loading, error } = useFetch('http://localhost:1337/api/beritas?populate=*');

  const sponsorLogos = useMemo(
    () => [
      Logo1, Logo2, Logo3, Logo4, Logo5,
      Logo6, Logo7, Logo8, Logo9, Logo10,
      Logo11, Logo12, Logo13, Logo14, Logo15,
      Logo16, Logo17
    ],
    []
  );





  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero relative h-[80vh] flex items-center bg-cover bg-center overflow-hidden">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ${index === backgroundImage
                ? isAnimating
                  ? "animate-slide-in"
                  : "opacity-100"
                : isAnimating && index === (backgroundImage - 1 + backgroundImages.length) % backgroundImages.length
                  ? "animate-slide-out"
                  : "opacity-0"
              }`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </section>





      <section className="content py-16 bg-gray-100">
        <div className="px-4 md:px-10 py-8 md:py-10 text-left text-black flex flex-col items-start max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold">WELCOME TO</h1>
          <h2 className="text-3xl font-bold">DECO INTERNUSA <br /> CEMERLANG</h2>
          <p className="text-base md:text-lg leading-relaxed">
            We are committed to delivering high-quality services and solutions with the highest standards of excellence and reliability.
            By constantly evolving and embracing innovation, we strive to set new benchmarks in the industry.
            Moreover, we are deeply dedicated to contributing to the welfare and progress of the Indonesian nation by supporting sustainable development and enhancing the quality of life for communities.
            Through our efforts, we aim to play a significant role in advancing Indonesia's economic growth, particularly in the critical area of energy infrastructure.
          </p>
        </div>
      </section>





      {/* About Us Section */}
      <section className="about-us-home py-16 bg-blue-800">
        <div className="about-content flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto px-4">
          <div className="about-images mb-8 md:mb-0 md:w-1/2 md:mr-8 lg:mr-16 xl:mr-60">
            <img src={Gambar} alt="About us section " className="w-full h-auto rounded-lg " />
          </div>
          <div className="about-text md:w-1/2">
            <h2 className="text-3xl font-bold text-white mb-4">About Us</h2>
            <p className="text-lg text-white leading-relaxed mb-4">
              Our company established in 2007, starting with <br />
              CV (Commanditaire Vennootschap), which later change into PT (Limited Liability Company). <br />
              From the beginning, we have already concentrated in provision service and procurement of goods in
              electrical and mechanical sector. We are committed to always meet the best quality standard. Thus, to
              intensify the service and the commitment, we changed into PT. DECO INTERNUSA CEMERLANG in 2013.
              <br />At the moment...
            </p>
            <Link to="/about-us">
              <button className="bg-orange-500 text-white py-2 px-5 rounded-lg hover:bg-orange-600">Learn More</button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services py-16 bg-gray-100">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">Our Services</h2>
        <div className="services-cards-container flex flex-wrap justify-center gap-8">
          {/* Loop over services */}
          {[{ img: Gambar1, title: 'Project', description: 'Detailed description for this service goes here. We provide expert solutions for all your project needs.' },
          { img: Gambar6, title: 'Services', description: 'Comprehensive services designed to enhance your business. Let us help you grow and succeed.' },
          { img: Gambar5, title: 'Product', description: 'Top-quality products that cater to your specific needs. Browse through our wide range of offerings.' }]
            .map((service, index) => (
              <div key={index} className="service-container relative w-full sm:w-72 md:w-80 lg:w-96 xl:w-1/4 bg-white rounded-lg shadow-lg overflow-hidden group">

                {/* Gambar dengan efek blur saat hover */}
                <img src={service.img} alt={service.title} className="service-image w-full h-56 object-cover group-hover:blur-sm transition-all duration-1000" />

                {/* White overlay untuk efek hover */}
                <div className="white-overlay absolute inset-0 bg-white opacity-0 group-hover:opacity-70 transition-opacity duration-1000"></div>

                {/* Teks di pojok kanan atas */}
                <div className="corner-text absolute top-2 right-2 text-lg font-bold text-blue-900">{service.title}</div>



                {/* Overlay yang muncul saat hover */}
                <div className="overlay absolute bottom-0 w-full bg-blue-900 bg-opacity-80 text-white p-4 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <p className="text-sm mb-4">
                    {service.description}
                  </p>
                  <Link to={`/${service.title.toLowerCase()}`}>
                    <button className="bg-transparent border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-blue-900">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>


      {/* News Section */}
      <section className="news-section py-16 bg-white">
        <h2 className="text-center text-3xl font-bold text-gray-900 mb-10">Latest News</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error loading news: {error.message}</p>}
        <div className="news-cards flex flex-wrap justify-center gap-8">
          {newsData && newsData.length > 0 ? (
            newsData.map((news, index) => (
              <div key={index} className="news-card w-72 bg-white rounded-lg shadow-lg overflow-hidden text-center">
                {news.Gambar && news.Gambar.url ? (
                  <img
                    src={`http://localhost:1337${news.Gambar.url}`}
                    alt={news.Judul || "News image"}
                    className="w-full h-40 object-cover"
                  />
                ) : (
                  <p>No image available</p>
                )}
                <h3 className="text-lg font-bold text-blue-900 my-4">{news.Judul || "No title"}</h3>
                {news.Deskripsi && news.Deskripsi.length > 0 ? (
                  <p className="text-sm text-gray-700 mb-4">{news.Deskripsi[0].children[0].text.slice(0, 50)}...</p>
                ) : (
                  <p>No description available</p>
                )}
                <p className="text-gray-500 mb-4">{news.Tanggal || "No date available"}</p>
                <Link to={`/news/${news.id}`}>
                  <button className="bg-orange-500 text-white py-2 px-4 rounded-lg mb-6">
                    Learn More</button>
                </Link>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors-section py-20 bg-gray-50">
        <h3 className="text-center text-2xl font-semibold text-gray-900 mb-10">Our Sponsors</h3>
        <div className="home-logo-container flex justify-center overflow-hidden">
          <div className="logo-slide flex gap-8 animate-scroll">
            {/* Menggandakan gambar sponsor untuk membuatnya bergulir mulus */}
            {[...sponsorLogos, ...sponsorLogos].map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Sponsor ${index + 1}`}
                className="w-24 h-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;