import React, { useEffect, useState } from 'react';
import Hero from './component/Hero';
import Experience from './component/Experience';
import Skills from './component/Skill';
import Projects from './component/Projects';
import FloatingBar from './component/FloatingBar';
import Loader from './component/Loader';


const App = () => {
  const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 6500);
  return () => clearTimeout(timer);
}, []);

if (loading) return <Loader />;


  return (
    <div className="min-h-screen flex  justify-center  px-5 scroll-smooth">
      <div className="w-full max-w-2xl">
        <Hero />
        <Experience/>
       <Skills/>
       <Projects/>
       <FloatingBar/>
      </div>
    </div>
  );
};

export default App;
