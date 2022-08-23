import React from 'react';

// import components
import Projects from './Projects';

const Portfolio = () => {
  return (
    <section id='portfolio' className='section bg-primary min-h-[1400px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
        <span className='text-orange-400 text-4xl font-bold' >Recent Certificates</span>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            All My Work In My Github
          </h2>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
