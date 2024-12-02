import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const NewsDetail = () => {
  const { id } = useParams();
  const [newsDetail, setNewsDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/beritas?filters[id]=${id}&populate=*`);
        if (response.data.data && response.data.data.length > 0) {
          setNewsDetail(response.data.data[0]);
        } else {
          setError(new Error('Data not found'));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNewsDetail();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error.message}</p>;

  return (
    <div className="product-detail max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      {/* Judul di tengah */}
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        {newsDetail?.Judul || "No title"}
      </h2>

      {/* Layout Gambar dan Deskripsi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Deskripsi Service */}
        <div className="md:col-span-2 text-justify flex flex-col space-y-4">
          {newsDetail?.Deskripsi && newsDetail.Deskripsi.length > 0 ? (
            <div className="text-gray-700 leading-relaxed text-justify">
              {newsDetail.Deskripsi.map((desc, index) => (
                <p key={index}>{desc.children[0].text}</p>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">
              No description available
            </p>
          )}
        </div>

        {/* Gambar news */}
        <div className="flex justify-center md:justify-end">
          {newsDetail?.Gambar && newsDetail.Gambar.url ? (
            <img
              src={`http://localhost:1337${newsDetail.Gambar.url}`}
              alt={newsDetail.Judul || "News image"}
              className="w-full max-w-lg h-auto object-cover rounded-lg shadow-md"
            />
          ) : (
            <p className="text-gray-500 italic">No image available</p>
          )}
        </div>
      </div>

      {/* Tanggal di tengah dan paling bawah */}
      <p className="text-sm text-gray-600 mt-8 text-center">
        Tanggal: {newsDetail?.Tanggal || "No date available"}
      </p>
    </div>

  );
};

export default NewsDetail;
