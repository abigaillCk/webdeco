import React, { useEffect } from 'react';
import useFetch from '../hooks/UseFetch';
import { Link } from 'react-router-dom';
import backgroundImage from '../assets/About2.jpg';

const Services = () => {
  const { data: serviceData, loading, error } = useFetch('http://localhost:1337/api/services?populate=*');


  const services = [
    {
      title: "Building construction in Los Angeles, CA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/DServicesH",
      id: 1,
    },
    {
      title: "Building construction in Los Angeles, CA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/DServicesH2",
      id: 2,
    },
    {
      title: "Building construction in Los Angeles, CA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/DServicesH3",
      id: 3,
    },
    {
      title: "Building construction in Los Angeles, CA",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      link: "/DServicesH4",
      id: 4,
    },
  ];

  useEffect(() => {
    // Any necessary effects like AOS initialization can go here if needed
  }, []);

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="w-full font-roboto">
        {/* Background Image Section */}
        <div className="w-full h-[300px] md:h-[400px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
          }}>
        </div>
      </section>

      {/* Content Section */}
      <section className="content py-16 bg-gray-100">
        <div className="px-4 md:px-10 py-8 md:py-10 text-left text-black flex flex-col items-start max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">Our Services</h1>
          <p className="text-base md:text-lg leading-relaxed">
            We offer a wide range of professional services,
            tailored to meet the specific needs of every client.
            From initial consultation to project execution, our
            expert team is dedicated to delivering high-quality
            solutions that ensure the success of your business.
            Whether you need assistance with electrical design,
            installation, maintenance, or consulting services,
            we prioritize customer satisfaction and attention to
            detail in every aspect of our work. Our goal is to
            provide efficient, innovative, and cost-effective
            solutions that support your objectives and help you
            achieve long-term success in a constantly evolving industry.
          </p>
        </div>
      </section>






      <section className="news-section py-16 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Services</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error loading news: {error.message}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          {serviceData && serviceData.length > 0 ? (
            serviceData.map((service, index) => (
              <div
                key={index}
                className="product-card shadow-lg rounded-lg overflow-hidden bg-white"
              >
                {/* Gambar */}
                {service.Gambar && service.Gambar.length > 0 ? (
                  <img
                    src={`http://localhost:1337${service.Gambar[0].url}`}
                    alt={service.Judul || "Service image"}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                    No image available
                  </div>
                )}

                {/* Konten */}
                <div className="p-4">
                  {/* Nama Service */}
                  <h3 className="text-lg font-semibold text-gray-800">{service.Judul || "No title"}</h3>

                  {/* Deskripsi singkat */}
                  {service.Deskripsi && service.Deskripsi.length > 0 ? (
                    <p className="text-gray-600 text-sm mb-2">
                      {service.Deskripsi[0].children[0].text.slice(0, 50)}...
                    </p>
                  ) : (
                    <p className="text-gray-600 text-sm mb-2">No description available</p>
                  )}

                  {/* Tanggal */}
                  <p className="text-gray-500 text-sm mb-4">{service.Tanggal || "No date available"}</p>

                  {/* Link Learn More */}
                  <Link to={`/service/${service.id}`}>
                    <button className="bg-orange-500 text-white py-2 px-4 rounded-lg">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      </section>











      {/* Services Section */}
      <div className="services-container">
        <div className="services-grid">
          {services.map((services) => (
            <div className="services-card" key={services.id}>
              <div className="services-image">
                <img src="https://via.placeholder.com/300x200" alt={services.title} />
              </div>
              <div className="services-info">
                <h3>{services.title}</h3>
                <p>{services.description}</p>
                <a href={services.link} className="services-link">
                  More <span>&rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;