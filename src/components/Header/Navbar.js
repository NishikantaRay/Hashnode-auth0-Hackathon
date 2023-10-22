import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Anch_button from "../Buttons/Anch_button/Anch_button";
export default function Navbar() {
  return (
    <header className="site_header site_header_1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col col-lg-3 col-5">
            <div className="site_logo">
              <Link className="site_link" to="/">
                <img
                  src="assets/images/logo/logo.png"
                  alt="Collab - Online Learning Platform"
                  style={{ height: "70px" }}
                />
                <span>StudyTub</span>
              </Link>
            </div>
          </div>
          <div className="col col-lg-6 col-2">
            <nav className="main_menu navbar navbar-expand-lg">
              <div
                className="main_menu_inner collapse navbar-collapse justify-content-center"
                id="main_menu_dropdown"
              >
                <ul className="main_menu_list unordered_list_center">
                  <li>
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-link" to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className="dropdown">
                    <a
                      className="nav-link"
                      href="#"
                      id="pages_submenu"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Study Materials
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="pages_submenu"
                    >
                      <li>
                        <a
                          href="https://notes.studytub.workers.dev/0:/First%20Year/"
                          target="_blank"
                        >
                          First Semester
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://notes.studytub.workers.dev/0:/First%20Year/"
                          target="_blank"
                        >
                          Second Semester
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://notes.studytub.workers.dev/0:/3rd%20Sem/"
                          target="_blank"
                        >
                          Third Semester
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://notes.studytub.workers.dev/0:/4th%20sem/"
                          target="_blank"
                        >
                          Fourth Semester
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://notes.studytub.workers.dev/0:/5th%20sem/"
                          target="_blank"
                        >
                          Fifth Semester
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://notes.studytub.workers.dev/0:/6th%20sem/"
                          target="_blank"
                        >
                          Sixth Semester
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://notes.studytub.workers.dev/0:/7th%20Sem/"
                          target="_blank"
                        >
                          Seventh Semester
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://notes.studytub.workers.dev/0:/8th%20Sem/"
                          target="_blank"
                        >
                          Eighth Semester
                        </a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link className="nav-link" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="col col-lg-3 col-5">
            <ul className="header_btns_group unordered_list_end">
              <li>
                <button
                  className="mobile_menu_btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#main_menu_dropdown"
                  aria-controls="main_menu_dropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <i className="far fa-bars"></i>
                </button>
              </li>
              <li></li>
              <li>
                <Anch_button
                  clas="btn btn_dark"
                  href="https://notes.studytub.workers.dev/0:/"
                  target="_blank"
                  text1="Worker 🚀"
                  text2="Lets go 🚀"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
