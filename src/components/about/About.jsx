import React, { useEffect, useRef, useState } from 'react';
import abou from '../../assets/about.jpg';

const About = () => {
  const contentRefs = useRef([]);
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => ({ ...prev, [entry.target.dataset.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );

    contentRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      contentRefs.current.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const setRef = (el, id) => {
    if (el && !contentRefs.current.includes(el)) {
      el.dataset.id = id;
      contentRefs.current.push(el);
    }
  };

  // Different animation directions
  const animateClass = (id) => {
    if (id === 'image') {
      return visible[id]
        ? 'opacity-100 translate-x-0'
        : 'opacity-0 -translate-x-20'; // 👈 image slides from left
    } else {
      return visible[id]
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-10'; // 👈 others slide upward
    }
  };

  return (
    <div id='about' className="px-20 py-16 max-sm:px-4 max-sm:py-8 bg-gray-50">
      <div className="flex flex-col lg:flex-row items-center gap-12">

        {/* Image */}
        <div
          ref={(el) => setRef(el, 'image')}
          className={`flex-1 flex justify-center lg:justify-start transition-all duration-1000 ease-out transform ${animateClass(
            'image'
          )}`}
        >
          <div className="p-5 rounded-full bg-[radial-gradient(circle,_#ec4899,_#fbcfe8,_#ffe4f0)]">
            <img
              src={abou}
              alt="About Me"
              className="rounded-full w-[300px] sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[400px] lg:h-[500px] object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-1 space-y-4">
     <h2
  ref={(el) => setRef(el, 'title')}
  className={`text-4xl font-bold text-gray-800 mb-3 transition-all duration-1000 ease-out transform ${animateClass(
    'title'
  )} underline decoration-pink-500 mt-2 underline-offset-4`}
>
  About Me
</h2>


          <div
            ref={(el) => setRef(el, 'react')}
            className={`p-4 rounded bg-white shadow-2xl transition-all duration-1000 ease-out transform ${animateClass(
              'react'
            )}`}
          >
            <p className="text-gray-600 text-base leading-relaxed cursor-pointer">
              I am a passionate{' '}
              <span className="font-semibold text-pink-500">React.js developer</span> with a strong foundation in computer science. With hands-on experience in building dynamic and responsive web applications, I specialize in creating intuitive user interfaces and efficient front-end solutions.
            </p>
          </div>

          <div
            ref={(el) => setRef(el, 'teaching')}
            className={`p-4 rounded bg-pink-50 shadow-lg transition-all duration-1000 ease-out transform ${animateClass(
              'teaching'
            )}`}
          >
            <p className="text-gray-700 text-base leading-relaxed">
              In addition to my development skills, I have a background in{' '}
              <span className="font-semibold text-pink-500">teaching computer science</span>, which has honed my ability to break down complex concepts and approach problems with clarity and precision. This combination of teaching and development experience allows me to not only write clean, maintainable code but also communicate and collaborate effectively within a team.
            </p>
          </div>

          <div
            ref={(el) => setRef(el, 'learning')}
            className={`p-4 rounded bg-white shadow-xl transition-all duration-1000 ease-out transform ${animateClass(
              'learning'
            )}`}
          >
            <p className="text-gray-600 text-base leading-relaxed">
              I am continuously exploring the latest web technologies and best practices, striving to create impactful projects that make a difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
