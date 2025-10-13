import React, { useState, useRef, useEffect } from 'react';
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail, MdLocationPin } from "react-icons/md";
import { motion, useAnimation } from 'framer-motion';

const Contact = () => {
  const [status, setStatus] = useState("");
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const leftControls = useAnimation();
  const rightControls = useAnimation();

  // Scroll animation using IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) leftControls.start("visible");
            if (entry.target === rightRef.current) rightControls.start("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => {
      if (leftRef.current) observer.unobserve(leftRef.current);
      if (rightRef.current) observer.unobserve(rightRef.current);
    };
  }, [leftControls, rightControls]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "6bf34283-c489-4e38-bd46-07d2b7d8dbe3");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    form.reset();

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: json,
      }).then((res) => res.json());

      if (res.success) setStatus("✅ Message sent successfully!");
      else setStatus("❌ Failed to send message. Please try again.");
    } catch (error) {
      console.error(error);
      setStatus("⚠️ An error occurred. Please try again later.");
    }
  };

  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div id='contact' className="px-6 lg:px-16 mt-10">
      <div className="flex flex-col lg:flex-row gap-10">

        {/* Left Side */}
        <motion.div
          ref={leftRef}
          initial="hidden"
          animate={leftControls}
          variants={variants}
          className="flex-1 space-y-6"
        >
          <h1 className="text-3xl font-semibold bg-gradient-to-r from-red-500 via-blue-500 to-green-500 text-transparent bg-clip-text">
            Get In Touch
          </h1>

          <p className="text-gray-800">
            Thank you for visiting my portfolio! I’m always excited to connect with others who share a
            passion for web development and design.
          </p>

          <div className="flex flex-col gap-6 text-gray-700">
            <a href="tel:9809978217" className="flex items-center gap-2 hover:text-blue-500 transition">
              <LuPhoneCall className="text-lg" /> 9809978217
            </a>

            <a href="mailto:vishnupanil999@gmail.com" className="flex items-center gap-2 hover:text-blue-500 transition">
              <MdOutlineEmail className="text-lg" /> vishnupanil999@gmail.com
            </a>

            <a href="#" className="flex items-center gap-2 hover:text-blue-500 transition">
              <MdLocationPin className="text-lg" /> Trivandrum, India
            </a>
          </div>
        </motion.div>

        {/* Right Side (Contact Form) */}
        <motion.div
          ref={rightRef}
          initial="hidden"
          animate={rightControls}
          variants={variants}
          className="flex-1 space-y-4"
        >
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full border-2 border-pink-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full border-2 border-pink-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              className="w-full border-2 border-pink-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className=" cursor-pointer bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-lg hover:from-pink-600 hover:to-orange-600 transition"
            >
              Send Message
            </button>
          </form>

          {status && <p className="text-green-600 font-small mt-2">{status}</p>}
        </motion.div>

      </div>
    </div>
  );
};

export default Contact;
