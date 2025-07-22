import React from 'react';
import vftLogo from "/public/vft-logo-horizontal.png";
import CODELAB from "/public/CODELAB.JPG";

const experienceData = [
  {
    company: "Vision Flow Technology",
    role: "MERN Stack Developer – Intern",
    duration: "Feb 2025 – May 2025",
    logo: vftLogo,
    points: [
      "Responsible for developing full-stack web applications using React.js, Node.js, Express.js, and MongoDB for 4+ real-time client projects.",
      "Worked on implementing user authentication, integrating 5+ RESTful APIs, and deploying features to cloud platforms in an Agile development environment.",
      "Took ownership of both frontend and backend development, including UI design and server-side logic.",
      "Delivered features aligned with client-specific requirements, improving client satisfaction and user experience.",
      "Collaborated in a team of 5 developers following Agile methodologies and version control using Git/GitHub.",
    ]
  },
  {
    company: "Codelab Systems",
    role: "MERN Stack Developer – Intern",
    duration: "Jan 2025 – Apr 2025",
    logo: CODELAB,
    points: [
      "Built and maintained frontend components and backend APIs using the MERN stack, contributing to 2 internal web applications.",
      "Collaborated with a team of 4 developers to enhance application functionality and manage code using Git and Agile workflows.",
      "Focused on code reusability, clean architecture, and efficient API integration to enhance application functionality.",
      "Participated in code reviews, brainstorming sessions, and testing to improve overall product quality and team learning.",
    ]
  }
];

const Experience = () => {
  return (
    <div>
      <div className="pt-8">
        <h3 className="text-base md:text-2xl font-semibold pb-4">Work Experience</h3>
      </div>

      <div className="flex flex-col gap-8">
        {experienceData.map((exp, idx) => (
          <div key={idx} className="flex flex-col justify-between">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-1.5">
                {exp.logo && (
                  <img
                    src={exp.logo}
                    alt=""
                    className="h-10 w-10 md:h-14 md:w-14 object-cover rounded-full border border-gray-300"
                  />
                )}
                <div>
                  <p className="text-sm md:text-xl font-semibold">{exp.company}</p>
                  <p className="text-xs md:text-sm">{exp.role}</p>
                </div>
              </div>
              <p className="text-xs md:text-sm text-gray-500 font-semibold">{exp.duration}</p>
            </div>
            <div className="pt-4 pl-10 md:pl-18">
              <ul className="list-disc text-xs leading-semibold md:text-sm font-normal text-gray-500">
                {exp.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
