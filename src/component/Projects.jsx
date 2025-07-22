import React from 'react'
import expense from "/public/expense.png"
import weather from "/public/weather.png"
import tomato from "/public/tomatoo.png"
import quiz from "/public/quiz.png"
import { FaGithub,FaExternalLinkAlt} from "react-icons/fa"
const Projects = () => {
    const projectsData = [
  {
    title: "Expense Tracker",
    description: [
      "Designed and implemented a full-stack expense management application using React.js, Node.js, Express.js, and MongoDB to track income and expenses.",
      "Integrated user authentication, transaction CRUD operations, and dynamic data visualizations using chart libraries for real-time financial insights."
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB","Tailwind css", "ContextAPI"],
    image: expense,
    website: "https://expense-tracker-frontend-sg05.onrender.com",
    source: "https://github.com/shreyas86/expense-tracker"
  },
  
      {
       title: "Tomato",
       description: [
         "A responsive food ordering website built using React.js and Context API for state management.",
         "Includes features like dynamic food filtering, add-to-cart functionality, and seamless user interaction across all devices."
       ],
       techStack: ["React", "ContextAPI"],
       image: tomato,
       website: "https://tomato-sable.vercel.app/",
       source: "https://github.com/shreyas86/Tomato"
     },
     {
  title: "Quiz",
  description: [
    "A simple and interactive quiz web application built using HTML, CSS, and JavaScript.",
    "Features multiple-choice questions, real-time scoring, and instant feedback to enhance user engagement."
  ],
  techStack: ["HTML", "CSS", "JavaScript"],
  image: quiz,
  website: "https://shreyas86.github.io/quiz/",
  source: "https://github.com/shreyas86/quiz"
},
     {
    title: "Weather Cast",
    description: [
      "Developed a responsive weather application that fetches real-time data using a third-party weather API and displays temperature, humidity, and wind speed.",
      "Implemented search functionality with live API integration and optimized DOM rendering for a seamless user experience."
    ],
    techStack: ["HTML", "CSS", "JavaScript"],
    image: weather,
    website: "https://shreyas86.github.io/weather-app/",
    source: "https://github.com/shreyas86/weather-app"
  }
];

  return (
    <div>
        <div className="flex flex-col gap-2.5 items-center">
            <h1 className='text-xs md:text-lg bg-black px-2.5 border rounded-full py-1 text-white'>My Project</h1>
            <h1 className="text-xl md:text-3xl font-bold">Check out my project work</h1>
            <p className="text-xs md:text-lg text-center text-gray-400 ">I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
        </div>
  <div className="flex flex-wrap justify-center gap-6 pt-3 md:p-5">
  {projectsData.map((project, index) => (
    <div key={index} className="max-w-2xl w-full border-1 border-gray-200 rounded-lg shadow-xl p-2 md:p-3">
      {/* Image */}
      <div className="rounded-md overflow-hidden mb-3">
        <img
        loading='lazy'
          src={project.image}
          alt={project.title}
          className="w-full md:h-60 object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="text-base font-semibold mb-3 md:mb-5">{project.title}</h1>

      {/* Description */}
      <ul className="list-disc pl-6 text-xs md:text-sm text-gray-500 leading-none space-y-2 mb-3 md:mb-5">
        {project.description.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-3 md:mb-5">
        {project.techStack.map((tech, i) => (
          <p key={i} className="bg-gray-200 px-3 py-1 rounded-full text-xs md:text-sm">{tech}</p>
        ))}
      </div>

      {/* Links */}
      <div className="flex gap-4">
        <a href={project.website} className="bg-black text-white px-2 py-1 rounded-md flex items-center gap-2 hover:bg-gray-800 text-xs md:text-sm">
          <FaExternalLinkAlt/> Website
        </a>
        <a href={project.source} className="bg-black text-white px-2 py-1 rounded-md flex items-center gap-2 hover:bg-gray-800 text-xs md:text-sm">
          < FaGithub/> Source
        </a>
      </div>
    </div>
  ))}
</div>
     <div className="flex flex-col gap-2.5 items-center pt-9 pb-24">
            <h1 className='text-xs md:text-lg bg-black px-3 border rounded-full py-1 text-white'>Contact</h1>
            <h1 className="text-xl md:text-3xl font-bold">Get in Touch</h1>
<p className="text-xs md:text-lg text-center text-gray-500">
  Would you like to get in touch? Just shoot me an{' '}
  <a
    href="mailto:shreyasin153@gmail.com?subject=Let's%20Connect&body=Hi%20Shreyas,%20I%20would%20like%20to%20connect%20with%20you."
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600"
  >
    Email
  </a>{' '}
  here or contact me at{' '}
  <span className="text-blue-600">9663582948</span> and I'll respond to you, surely.
</p>
        </div>
    </div>
  )
}

export default Projects
