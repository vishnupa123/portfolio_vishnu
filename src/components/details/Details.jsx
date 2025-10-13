  import React, { useState } from 'react';
  import { useLocation } from 'react-router-dom';
  import { ChevronLeft, ChevronRight } from 'lucide-react';

  const Details = () => {
    const location = useLocation();
    const project = location.state; // Project object
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!project) return <p>No project data found!</p>;

    const handlePrev = () => {
      setCurrentIndex((prev) =>
        prev === 0 ? project.imageCollection.length - 1 : prev - 1
      );
    };

    const handleNext = () => {
      setCurrentIndex((prev) =>
        prev === project.imageCollection.length - 1 ? 0 : prev + 1
      );
    };

    return (
      <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 min-h-screen py-8">
        <div className="max-w-6xl mx-auto px-4">
          {/* Project Title */}
        
          {/* Project Description */}
      

          {/* Image Banner */}
          <div className="relative w-full h-[500px] md:h-[700px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
            {/* Image with smooth transition */}
            <img
              key={currentIndex}
              src={project.imageCollection[currentIndex]}
              alt={`Project ${project.title} image ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-all duration-500 ease-in-out"
            />

            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-black bg-opacity-40 text-white p-3 rounded-full hover:bg-opacity-60 transition"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Image Indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {project.imageCollection.map((_, index) => (
              <span
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Details;
