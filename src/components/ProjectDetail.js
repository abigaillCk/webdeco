import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const ProjectDetail = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const [projectDetail, setProjectDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjectDetail = async () => {
      try {
        // Memanggil API dengan filter berdasarkan ID
        const response = await axios.get(`http://localhost:1337/api/projects?filters[id]=${id}&populate=*`);
        const data = response.data.data;

        // Pastikan ada data yang ditemukan
        if (data && data.length > 0) {
          setProjectDetail(data[0]); // Ambil proyek pertama dari array
        } else {
          setError({ message: "Project not found." });
        }
      } catch (err) {
        setError(err.response ? err.response.data : { message: "An error occurred." });
      } finally {
        setLoading(false);
      }
    };

    fetchProjectDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="project-detail container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-5xl mt-8">
      {/* Judul di tengah */}
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        {projectDetail.Nama || "No title"}
      </h2>

      {/* Layout Gambar dan Deskripsi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Deskripsi Proyek */}
        <div className="md:col-span-2 text-justify flex flex-col space-y-4">
          {projectDetail.Deskripsi && projectDetail.Deskripsi.length > 0 ? (
            <div className="text-gray-700 leading-relaxed">
              {projectDetail.Deskripsi.map((desc, index) => (
                <p key={index}>{desc.children[0].text}</p>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">
              No description available
            </p>
          )}
        </div>

        {/* Gambar Proyek */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          {projectDetail.Gambar && projectDetail.Gambar.length > 0 ? (
            projectDetail.Gambar.map((gambar, index) => (
              <img
                key={index}
                src={`http://localhost:1337${gambar.url}`}
                alt={projectDetail.Nama || "Project image"}
                className="w-full max-w-lg h-auto object-cover rounded-md shadow-md"
              />
            ))
          ) : (
            <p className="text-gray-500 italic">No image available</p>
          )}
        </div>

      </div>

      {/* Tanggal di tengah dan paling bawah */}
      <p className="text-sm text-gray-600 mt-8 text-center">
        Tanggal Proyek: {projectDetail.Tanggal || "No date available"}
      </p>
    </div>



  );
};

export default ProjectDetail;
