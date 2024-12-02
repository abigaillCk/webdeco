import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductDetail = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const [productDetail, setProductDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:1337/api/products?filters[id]=${id}&populate=*`);
        // Mengambil elemen pertama dari array data
        if (response.data.data.length > 0) {
          setProductDetail(response.data.data[0]); // Menyimpan detail produk
        } else {
          setError(new Error('Product not found'));
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetail();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="product-detail container mx-auto p-6 bg-white shadow-lg rounded-lg max-w-5xl mt-8">
      {/* Judul di tengah */}
      <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">
        {productDetail?.Nama || "No title"}
      </h2>

      {/* Layout Gambar dan Deskripsi */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Deskripsi Produk */}
        <div className="md:col-span-2 text-justify flex flex-col space-y-4">
          {productDetail?.Deskripsi && productDetail.Deskripsi.length > 0 ? (
            <div className="text-gray-700 leading-relaxed text-justify">
              {productDetail.Deskripsi.map((desc, index) => (
                <p key={index}>{desc.children[0].text}</p>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">
              No description available
            </p>
          )}
        </div>

        {/* Gambar Produk */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          {productDetail?.Gambar?.length > 0 ? (
            productDetail.Gambar.map((gambar, index) => (
              <img
                key={index}
                src={`http://localhost:1337${gambar.url}`}
                alt={productDetail.Nama || "Product image"}
                className="w-full max-w-lg h-auto object-cover rounded-md shadow-md"
              />
            ))
          ) : (
            <p className="text-gray-500 italic">No image available</p>
          )}

          {/* Jumlah Produk di bawah gambar */}
          <p className="text-sm text-gray-600 mt-4 text-center w-full">
            Jumlah Produk: {productDetail?.Jumlah || "No quantity available"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
