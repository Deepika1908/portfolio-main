import React from "react";

const Resume = () => {
  // Directly referencing the public folder for the PDF file
  const pdfUrl = "/Preeti.pdf"; // Ensure this file is in the 'public' folder

  return (
    <section className="resume">
      <div className="resume-content">
        {/* Ensure the PDF link works */}
        <a href={pdfUrl} download="MyResume.pdf" className="download-btn">
          Download Resume
        </a>
        <br />
        {/* Embed the PDF to show in the browser */}
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
