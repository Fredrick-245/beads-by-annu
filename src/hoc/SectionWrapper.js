import React from "react";
import './section.css'

const SectionWrapper = ({ children }) => {
  function hoc() {
    return <div className="section-wrapper">{children}</div>;
  }
  return hoc;
};

export default SectionWrapper;
