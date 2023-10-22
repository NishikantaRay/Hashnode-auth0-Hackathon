import React from "react";

export default function Heading({ text, clss, clss2 }) {
  return (
    <div className="row">
      <div className={`col col-lg-${clss2}`}>
        <div className="section_heading">
          <h2 className={`heading_text ${clss}`}>{text}</h2>
        </div>
      </div>
    </div>
  );
}
