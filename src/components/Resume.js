import React from 'react';
// import '../styles/Resume.css';

const Resume = () => {
  const pdfUrl = `${process.env.PUBLIC_URL}/Preeti.pdf`;

  return (
    <section className="resume">
      <div className="resume-content">
        <a
          href={pdfUrl}
          download="MyResume.pdf"
          className="download-btn"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;