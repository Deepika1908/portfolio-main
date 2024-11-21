import React from 'react';
// import '../styles/Exp.css';
import internImage from '../assets/img/intern.jpg';

const Exp = () => {
  const experienceList = [
    { 
      title: 'Intern', 
      company: 'StartUp Inc.', 
      duration: 'Jun 2019 - Dec 2019', 
      description: 'Worked on frontend development and UI/UX design.', 
      image: internImage 
    },
    // Add more experiences here
  ];

  return (
    
    <div>
      {/* <h2 className='txt'>Experience</h2> */}
      <section className="experience">
      <br/>
      <div className="exp">
        {experienceList.map((exp, index) => (
          <div key={index} className="experience-card">
            <img src={exp.image} alt={exp.title} className="experience-image" />
            <h3>{exp.title}</h3>
            <p><strong>{exp.company}</strong></p>
            <p>{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Exp;