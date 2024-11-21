import React from 'react';
// import '../styles/Exp.css';
import internImage from '../assets/img/intern.jpg';

const Exp = () => {
  const experienceList = [
    { 
      title: 'Intern', 
      company: 'SHREE LAXMI TRADING.', 
      duration: 'July 17 – July 22 ', 
      description:[
        "• Generating Invoice, Keeping Accounts and Generating GST Bills. Worked as an accountant.",
        "• Gained professional work experience and learned to put my knowledge and skill into practice.",
        "• Learned the importance of taking feedback and good communication."
      ],
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