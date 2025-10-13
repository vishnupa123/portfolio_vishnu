import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import job from '../../assets/jobapp/home2.png';
import { mainproject } from '../../assets/files';
import './Project.css';
import { FaRegEye } from "react-icons/fa";

import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const [jo, setJo] = useState(mainproject);
  const scrollRef = useRef(null);
  const sectionRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      },
      { threshold: 0.3 } // triggers when 30% visible
    );

    const elements = sectionRef.current.querySelectorAll('.scroll-fade');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);



const navigate = useNavigate()





  return (
    <div id='projects' className="px-4 max-sm:p-0 md:px-30 ml-2 sm:ml-7 lg:mb-6" ref={sectionRef}>
      {/* Heading */}
      <div className="heading flex justify-start lg:ml-4 items-center scroll-fade">
        <h2 className="text-4xl  font-bold text-gray-800 mb-3 border-b-4 border-pink-500 w-fit">
          Projects
        </h2>
      </div>

      {/* Paragraph Section */}
   {/* Paragraph Section */}
<div className="bg-white flex  px-4 py-3 shadow-lg rounded-md scroll-fade
                max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl
                mx-auto lg:mx-0">
  <p className="text-sm text-gray-600 text-center sm:text-left">
    I’ve developed several projects using <span className='text-pink-500 font-bold'>ReactJS, Tailwind,</span> and Bootstrap, focusing on responsive and user-friendly designs. My final project, built with the <span className='text-pink-500 font-bold'>MERN stack,</span> showcases my full-stack development skills.
  </p> 
</div>

      {/* Scrollable Project Gallery */}
      <div className="relative w-full mt-10">
        <button
          onClick={() => scroll('left')}
          className=" cursor-pointer absolute left-0 top-1/2 -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full shadow-lg hover:bg-pink-600 z-10"
        >
          <ChevronLeft size={24} />
        </button>

        <div ref={scrollRef} className="flex gap-5 scroll-container">
          {jo.map((project, index) => (
            <div key={index} className="relative border-4 border-pink-400 rounded-lg p-2 flex-shrink-0 cursor-pointer overflow-hidden w-72 h-72 group">
              <img src={project.image || job} alt={`project-${index}`} className="w-full h-full object-cover rounded-2xl" />
              <div className="absolute inset-0 bg-transparent backdrop-blur-sm opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center text-center transition-opacity duration-300 rounded-2xl">
              
                <h3 className="text-pink-500 font-semibold text-lg mb-2">{project.title}</h3>


                <button         onClick={() => navigate(`/project/${project.id}`, { state: project })}  className="bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-700 hover:to-orange-600 px-6 py-1 rounded-2xl cursor-pointer text-white">
                  <div className='flex items-center gap-3'> 
                    <FaRegEye /> Visit
                  </div>
                </button>
                                <p className='text-sm text-pink-700'>{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll('right')}
          className="cursor-pointer absolute right-0 top-1/2 -translate-y-1/2 bg-pink-500 text-white p-2 rounded-full shadow-lg hover:bg-pink-600 z-10"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
