import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';



import Header from "./components/Header";
import Hero from "./components/hero/Hero";
import Bar from "./components/bar/Bar";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Contact from "./contact/Contact";
import Projects from "./components/projects/Projects";
import Details from "./components/details/Details";

const App = () => {
  const location = useLocation();

  // Determine if the current page is the details page
  const isDetailsPage = location.pathname.startsWith("/project/");

  return (
    <>
      {/* Render header and other sections only if NOT on details page */}
      {!isDetailsPage && (
        <>
          <Header />
          <Hero />
          <br />
          <Bar />
          <br />
          <br />
          <br />
          <About />
          <Skills />
          <br />
          <Projects />
          <br />
          <Contact />
          <br />
          <Footer />
        </>
      )}

      {/* Routes */}
      <Routes>
        <Route path="/project/:id" element={<Details />} />
        {/* You can add other routes if needed */}
      </Routes>
    </>
  );
};

export default App;
