import React from 'react';
import backgroundImage from '../assets/baterai.jpg';
import { Link } from 'react-router-dom';
import useFetch from '../hooks/UseFetch';

const Product = () => {
  // Ganti URL dengan endpoint API Strapi Anda
  const { data: productData, loading, error } = useFetch('http://localhost:1337/api/products?populate=*');

  return (
    <div>
      {/* Hero Section */}
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
          <h1 className="text-2xl md:text-3xl font-semibold mb-4">Our Product</h1>
          <p className="text-base md:text-lg leading-relaxed">
            Discover our comprehensive range of high-performance products meticulously
            designed to meet the diverse energy needs of industries across various sectors.
            From advanced battery technologies to innovative power solutions, we offer products
            that prioritize efficiency, reliability, and durability. Whether you require energy
            storage for large-scale industrial applications or cutting-edge solutions to optimize
            your power management, our offerings are engineered to deliver top-tier performance.
            Each product undergoes rigorous testing to ensure it meets the highest standards of
            quality and safety, providing you with long-lasting solutions that reduce downtime and
            operational costs. With a commitment to innovation, we continuously enhance our product
            line to integrate the latest technological advancements, ensuring that you stay ahead in
            an ever-evolving energy landscape. Partner with us to power your industry with solutions
            that not only meet your current demands but also pave the way for a sustainable and
            energy-efficient future.
          </p>
        </div>
      </section>







      {/* Product Section */}
      <section className="product py-16 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Products</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error loading products: {error.message}</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
          {productData && productData.length > 0 ? (
            productData.map((product, index) => (
              <div key={index} className="product-card shadow-lg rounded-lg overflow-hidden bg-white">
                {/* Image */}
                {product.Gambar && product.Gambar.length > 0 ? (
                  <img
                    src={`http://localhost:1337${product.Gambar[0].url}`}
                    alt={product.Nama || "Product image"}
                    className="w-full h-48 object-cover"
                  />
                ) : (
                  <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                    No image available
                  </div>
                )}

                {/* Content */}
                <div className="p-4">
                  {/* Product Name */}
                  <h3 className="text-lg font-semibold text-gray-800">{product.Nama || "No title"}</h3>

                  {/* Short Description */}
                  {product.Deskripsi && product.Deskripsi.length > 0 ? (
                    <p className="text-gray-600 text-sm mb-2">
                      {product.Deskripsi[0].children[0].text.slice(0, 50)}...
                    </p>
                  ) : (
                    <p className="text-gray-600 text-sm mb-2">No description available</p>
                  )}

                  {/* Quantity */}
                  <p className="text-gray-500 text-sm mb-4">
                    Jumlah Product: {product.Jumlah !== undefined ? product.Jumlah.toString() : "No quantity available"}
                  </p>

                  {/* Learn More Link */}
                  <Link to={`/product/${product.id}`} className="text-orange-500 font-semibold text-sm">
                    More →
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

export default Product;
