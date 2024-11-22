import React from "react";

const Resume = () => {
  const pdfUrl = "/Preeti.pdf"; 

  return (
    <section className="resume">
      <div className="resume-content">
        <a href={pdfUrl} download="MyResume.pdf" className="download-btn">
          Download Resume
        </a>
        <br />
        <iframe
          src={pdfUrl}
          title="Resume"
          width="100%"
          height="600px"
          style={{
            border: "none",
            marginTop: "20px",
          }}
        ></iframe>
      </div>
    </section>
  );
};

export default Resume;
