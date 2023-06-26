import React from "react";

const SectionTitle = ({ text }: any) => {
  return (
    <div style={{ textAlign: "center", width: "100%" }}>
      <span className="section_title">{text}</span>
    </div>
  );
};

export default SectionTitle;
