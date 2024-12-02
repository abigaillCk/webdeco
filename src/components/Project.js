import React from 'react';
import backgroundImage from '../assets/gambar9.jpg';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';

const Project = () => {

  // Ganti URL dengan endpoint API Strapi Anda
  const { data: projectData, loading, error } = useFetch('http://localhost:1337/api/projects?populate=*');


  return (
    <div>
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
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">Our Project</h1>
          <p className="text-base md:text-lg leading-relaxed">
            At Deco Internusa Cemerlang, we take pride in
            managing key projects that emphasize both innovation
            and quality. Our dedicated team works closely with
            clients to ensure that each project not only meets but
            exceeds expectations. From initial planning and design
            to execution and final delivery, we maintain a focus on
            providing customized solutions that align with the unique
            goals and challenges of every client. Our expertise spans
            a wide range of industries, allowing us to apply innovative
            techniques and industry best practices to every project we
            undertake. By prioritizing communication, efficiency, and a
            commitment to excellence, we ensure that every project is
            delivered on time, within budget, and to the highest standards
            of quality. Discover how our team helps clients achieve exceptional
            outcomes and long-term success in every endeavor.
          </p>
        </div>
      </section>




      {/* Project Section */}
      <section className="project-section py-16 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Projects</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error loading projects: {error.message}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          {projectData && projectData.length > 0 ? (
            projectData.map((project, index) => (
              <div
                key={index}
                className="product-card shadow-lg rounded-lg overflow-hidden bg-white"
              >
                {/* Gambar */}
                {project.Gambar && project.Gambar.length > 0 ? (
                  <img
                    src={`http://localhost:1337${project.Gambar[0].url}`}
                    alt={project.Nama || "Project image"}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                    No image available
                  </div>
                )}

                {/* Konten */}
                <div className="p-4">
                  {/* Nama Proyek */}
                  <h3 className="text-lg font-semibold text-gray-800">{project.Nama || "No title"}</h3>

                  {/* Deskripsi singkat */}
                  {project.Deskripsi && project.Deskripsi.length > 0 ? (
                    <p className="text-gray-600 text-sm mb-2">
                      {project.Deskripsi[0].children[0].text.slice(0, 50)}...
                    </p>
                  ) : (
                    <p className="text-gray-600 text-sm mb-2">No description available</p>
                  )}

                  {/* Tanggal */}
                  <p className="text-gray-500 text-sm mb-4">{project.Tanggal || "No date available"}</p>

                  {/* Link Learn More */}
                  <Link to={`/project/${project.id}`}>
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


    </div>
  );
};

export default Project;