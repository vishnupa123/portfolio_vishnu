// ✅ Main Images
import jobhome1 from '../assets/jobapp/home2.png'
import gemini from '../assets/gemini/gemini.png'
import movie1 from '../assets/moiveapp/movie1.png'
import spotyfy from '../assets/spotyfy/spotyfy.png'
import shopsite from '../assets/shopsite/shop3.png'
import allj from '../assets/simple/all.jpg'





// ✅ Job App Images
import joblist from '../assets/jobapp/joblist.png'
import searchfilter from '../assets/jobapp/searchfiler.png'
import optionfilter from '../assets/jobapp/optionfilter.png'
import reclog from '../assets/jobapp/recruiter.png'
import manage from '../assets/jobapp/manage.png'
import post from '../assets/jobapp/postjob.png'
import action from '../assets/jobapp/action.png'
import ai from '../assets/jobapp/ai.png'

// ✅ Movie App Images
import movie2 from '../assets/moiveapp/movie2.png'
import movie3 from '../assets/moiveapp/movie3.png'
import moviesearch from '../assets/moiveapp/moviesearch.png'

// ✅ Shop Website Images
import shophome from '../assets/shopsite/shop3.png'
import shop2 from '../assets/shopsite/shop2.png'
import shop3 from '../assets/shopsite/shop4.png'

// ✅ simple projects Images
import passgen from './simple/passgen.png'
import calcu from './simple/calculator.png'
import agecal from './simple/agecalculator.png'
import bmi from './simple/bmi.png'
import weather from './simple/weather.png'






// ✅ Assets Object (optional grouping)
export const assets = {
  // main
  jobhome1,
  gemini,
  movie1,
  spotyfy,
  shopsite,
  allj,

  // job app
  joblist,
  searchfilter,
  optionfilter,
  reclog,
  manage,
  post,
  action,
  ai,

  // movie app
  movie2,
  movie3,
  moviesearch,

  // shop
  shophome,
  shop2,
  shop3,



// simple projects
 passgen ,
 calcu ,
 agecal ,
 bmi, 
 weather 


}





// ✅ Main Project Array
export const mainproject = [
  {
    id: 1,
    title: "Job Application Portal",
    image: jobhome1,
    description:
      "A full-stack MERN job portal integrated with an AI assistant that allows users to ask job-related questions and get instant responses.",
    imageCollection: [joblist, ai, searchfilter, optionfilter, reclog, manage, post],
  },
  {
    id: 2,
    title: "Movie App",
    image: movie1,
    description:
      "A ReactJS-based movie review and filter app that fetches trending movies from an API, displays ratings, and provides detailed movie information.",
    imageCollection: [movie2, movie3, moviesearch],
  },
  {
    id: 3,
    title: "Electronic Shop Website",
    image: shopsite,
    description:
      "An electronic shopping website built with ReactJS, featuring product listings, category filters, and a modern responsive layout.",
    imageCollection: [shophome, shop2, shop3],
  },
  {
    id: 4,
    title: "Spotify Clone",
    image: spotyfy,
    description:
      "A Spotify-inspired music player built with ReactJS, offering smooth UI design and interactive playback functionality.",
    imageCollection: [spotyfy],
  },
  {
    id: 5,
    title: "Gemini AI",
    image: gemini,
    description:
      "An AI-powered assistant built using the Gemini API with React and CSS, designed to deliver intelligent conversational responses.",
    imageCollection: [gemini],
  },

  {
    id: 6,
    title: "Simple Works",
    image: allj,
    description:
      "React js simple projects",
    imageCollection: [passgen,calcu,agecal,bmi,weather],
  },

  
]
