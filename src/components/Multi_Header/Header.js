import React from "react";
import Dark_button from "../Buttons/Dark_button/Dark_button";

export default function Header({ headerData }) {
  return (
    <section className="page_banner">
      <div className="container">
        <div
          className="content_wrapper"
          style={{
            backgroundImage: "url(assets/images/banner/page_banner_image.png)",
          }}
        >
          <div className="row align-items-center">
            <div className="col col-lg-6">
              <ul className="breadcrumb_nav unordered_list">
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li>
                  <a href="#!">Pages</a>
                </li>
                <li>{headerData.details}</li>
              </ul>
              <h1 className="page_title">{headerData.page_title || ""}</h1>
              <p className="page_description">
                {headerData.page_description || ""}
              </p>
              <form action="#">
                <div className="form_item mb-0">
                  <Dark_button
                    text_1={headerData.text_1 || ""}
                    text_2={headerData.text_2 || ""}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
