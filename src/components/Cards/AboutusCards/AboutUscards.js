import React from "react";

export default function AboutUscards({ heading1, sub, details, icon }) {
  return (
    <div className="col col-lg-3 col-md-6">
      <div className="iconbox_item">
        <div className="title_wrap">
          <div className="item_icon bg_dark">
            <i className={icon}></i>
          </div>
          <h3 className="item_title mb-0">
            <span className="d-block">{heading1} </span>
            {sub}
          </h3>
        </div>
        <p className="mb-0">{details}</p>
      </div>
    </div>
  );
}
