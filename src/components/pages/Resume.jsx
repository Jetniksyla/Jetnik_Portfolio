import React from "react";
import ResumeImage from '/src/assets/Resume.png'; 

const Resume = () => {
  return (
    <div style={{
      textAlign: 'center', 
      backgroundColor: '#f0f0f0', 
      fontFamily: "monospace",
      fontSize: "30px",
      padding: '20px', 
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}>
      <h1 style={{ color: '#333' }}>Resume</h1>
      <img src={ResumeImage} alt="Resume" style={{
        maxWidth: '100%', 
        height: 'auto', 
        border: '1px solid #ddd', 
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', 
        borderRadius: '4px',
        margin: "auto",
      }} />
      <a href={ResumeImage} download style={{
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: 'white', 
        color: 'black', 
        borderRadius: '5px',
        textDecoration: 'none',
        border: '1px solid #ccc' 
      }}>
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
