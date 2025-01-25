import React from "react";
import "../styles/Resume.css";

const Resume = () => {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <p>
        You can download my resume by clicking the link below.
      </p>
      <a
        href="https://your-resume-link.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        Download Resume
      </a>
    </section>
  );
};

export default Resume;
