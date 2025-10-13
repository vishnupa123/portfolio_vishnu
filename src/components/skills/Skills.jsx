import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import skillsImage from '../../assets/skills.jpg'; 
import { 
  SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, 
  SiReact, SiMongodb, SiNodedotjs, SiExpress 
} from "react-icons/si";

const Skills = () => {
  const [animatedSkills, setAnimatedSkills] = useState([]); 
  const skillsRef = useRef(null);
  const [startAnimation, setStartAnimation] = useState(false);

  const skillData = [
    { name: "HTML", value: 90, icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", value: 85, icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", value: 80, icon: SiJavascript, color: "text-yellow-400" },
    { name: "Bootstrap", value: 75, icon: SiBootstrap, color: "text-purple-500" },
    { name: "Tailwind", value: 70, icon: SiTailwindcss, color: "text-teal-400" },
    { name: "React JS", value: 85, icon: SiReact, color: "text-cyan-400" },
    { name: "MongoDB", value: 65, icon: SiMongodb, color: "text-green-600" },
    { name: "Node JS", value: 75, icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express", value: 60, icon: SiExpress, color: "text-gray-600" },
  ];

  // Observe skills section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  // Animate skill values
  useEffect(() => {
    if (startAnimation) {
      let timers = [];
      skillData.forEach((skill, index) => {
        let current = 0;
        const interval = setInterval(() => {
          current += 1;
          setAnimatedSkills((prev) => {
            const copy = [...prev];
            copy[index] = current;
            return copy;
          });
          if (current >= skill.value) clearInterval(interval);
        }, 15);
        timers.push(interval);
      });
      return () => timers.forEach((t) => clearInterval(t));
    }
  }, [startAnimation]);

  return (
    <div id="skills" className="px-4 py-16 bg-white">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={startAnimation ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="mb-4 pl-4 lg:pl-20"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-2 border-b-4 border-pink-500 inline-block pb-2">
          My Skills
        </h2>
      </motion.div>

      {/* Description */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={startAnimation ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl pl-4 lg:pl-20 "
      >
        <p className="text-gray-600 text-sm leading-relaxed">
          I have a solid foundation in front-end and back-end technologies. 
          My focus is on building responsive, interactive, and efficient web applications 
          using modern tools and frameworks.
        </p>
      </motion.div>

      {/* Skills & Image */}
      <div 
        ref={skillsRef} 
        className="flex flex-col lg:flex-row justify-between items-center gap-8 px-4 lg:px-20 py-8"
      >
        {/* Skill Bars */}
        <div className="w-full lg:w-1/2 space-y-4">
          {skillData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={startAnimation ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="flex items-center space-x-4"
              >
                <Icon className={`${skill.color} w-6 h-6`} />
                
                {/* Animated skill bar */}
                <div className="w-full bg-gray-200 rounded h-1 relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${animatedSkills[index] || 0}%` }}
                    transition={{ duration: 1 }}
                    className="h-1 rounded bg-pink-500"
                  ></motion.div>
                </div>
                
                <span className="w-10 text-right text-sm font-medium text-pink-400">
                  {animatedSkills[index] || 0}%
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={startAnimation ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="rounded-full overflow-hidden border-8 border-gray-200 max-w-[500px] max-h-[500px]">
            <img src={skillsImage} alt="Skills" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
