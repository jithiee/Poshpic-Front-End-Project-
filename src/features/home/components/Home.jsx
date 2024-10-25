import React from 'react';
import Button from '@mui/material/Button';
import wedding from '../assets/images/Wedding.png';
import event from '../assets/images/event.png';
import nature from '../assets/images/Nature.png';
import urban from '../assets/images/Urban.png';
import fashion from '../assets/images/Fashion.png';
import portrait from '../assets/images/Portrait.png';

const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen font-[Poppins, sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: "url('https://your-image-url.com')" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-80"></div>
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">Capture Your Moments</h1>
          <p className="text-xl text-gray-300 mb-8">Professional photography services to capture the essence of your most special moments. Book your session now!</p>
          <Button
            variant="contained"
            color="primary"
            className="bg-gradient-to-r from-[#1F485B] to-[#496D7E] px-10 py-4 rounded-full text-lg hover:shadow-lg hover:scale-105 transform transition-all duration-300"
          >
            Book a Session
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-gradient-to-r from-[#1F485B] to-[#496D7E] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">Why Choose Us?</h2>
          <p className="text-lg text-gray-300 mb-16 leading-relaxed">We bring professionalism, creativity, and passion to every shoot, ensuring your memories are perfectly captured.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: 'Creative Photography', description: 'Artistic and creative photoshoots tailored to your needs.' },
              { title: 'High-Quality Images', description: 'Using the latest equipment, we provide high-resolution, stunning images.' },
              { title: 'Flexible Packages', description: 'We offer flexible pricing and packages to suit all types of clients.' }
            ].map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-10 p-10 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-12">Our Portfolio</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[{ img: wedding, label: 'Wedding Photography' },
              { img: event, label: 'Event Photography' },
              { img: nature, label: 'Nature Photography' },
              // { img: fashion, label: 'Fashion Photography' },
              // { img: urban, label: 'Urban Photography' },
              // { img: portrait, label: 'Portrait Photography' }
            ].map((portfolio, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg group shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <img src={portfolio.img} alt={portfolio.label} className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-2xl font-bold">{portfolio.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-[#1F485B] to-[#496D7E] text-white text-center">
        <h2 className="text-5xl font-bold mb-6">Ready to Capture Your Special Moment?</h2>
        <p className="text-xl text-gray-300 mb-8">Book your session now and let us create memories that last a lifetime.</p>
        <Button
          variant="contained"
          color="primary"
          className="bg-gradient-to-r from-[#496D7E] to-[#1F485B] px-10 py-4 rounded-full text-lg hover:shadow-lg hover:scale-105 transform transition-all duration-300"
        >
          Get Started
        </Button>
      </section>
    </div>
  );
}

export default Home;
