import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <div className="pt-5 mt-5"></div>
      <footer className="site_footer">
        <div className="footer_widget_area">
          <div className="container">
            <div className="row">
              <div className="col col-lg-4 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <div className="site_logo">
                    <a className="site_link" href="index.html">
                      <img
                        src="assets/images/logo/logo.png"
                        alt="Collab - Online Learning Platform"
                      />
                      <span style={{ color: "white" }}>StudyTub</span>
                    </a>
                  </div>
                  <p>
                    StudyTub: Streamline BTECH studies. Quality notes,
                    accessible anywhere. Elevate your academic journey today.
                    Boost success!
                  </p>
                  <ul className="social_links unordered_list">
                    <li>
                      <a href="https://github.com/StudyTubOfficial">
                        <i className="fab fa-github"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://youtu.be/kzwfyEfJEW4?si=y11E80WV1KL2rwDC">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                    {/* <li>
                      <a href="#!">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li> */}
                    <li>
                      <a href="https://www.linkedin.com/company/study-tub/">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col col-lg-4">
                <div className="row">
                  <div className="col-6 col-md-6 col-sm-4">
                    <div className="footer_widget">
                      <h3 className="footer_widget_title">Links</h3>
                      <ul className="page_list unordered_list_block">
                        <li>
                          <Link to="/about">
                            <span className="item_icon">
                              <i className="fas fa-caret-right"></i>
                            </span>{" "}
                            <span className="item_text">About</span>
                          </Link>
                        </li>
                        <li>
                          <a href="https://notes.studytub.workers.dev/0:/">
                            <span className="item_icon">
                              <i className="fas fa-caret-right"></i>
                            </span>{" "}
                            <span className="item_text">Notes</span>
                          </a>
                        </li>
                        <li>
                          {/* attach the team section in the below a href */}

                          <Link to="/team">
                            <span className="item_icon">
                              <i className="fas fa-caret-right"></i>
                            </span>{" "}
                            <span className="item_text">Team</span>
                          </Link>
                        </li>
                        <li>
                          <a href="https://t.me/noteshare1">
                            <span className="item_icon">
                              <i className="fas fa-caret-right"></i>
                            </span>{" "}
                            <span className="item_text">Community</span>
                          </a>
                        </li>
                        {/* <li>
                          <a href="event.html">
                            <span className="item_icon">
                              <i className="fas fa-caret-right"></i>
                            </span>{" "}
                            <span className="item_text">Events</span>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>

                  <div className="col-6 col-md-6 col-sm-4">
                    <div className="footer_widget">
                      <h3 className="footer_widget_title">Support</h3>
                      <ul className="page_list unordered_list_block">
                        <li>
                          <a href="/faq">
                            <span className="item_icon">
                              <i className="fas fa-caret-right"></i>
                            </span>{" "}
                            <span className="item_text">FAQ</span>
                          </a>
                        </li>
                        <li>
                          <Link to="/contact">
                            <span className="item_icon">
                              <i className="fas fa-caret-right"></i>
                            </span>{" "}
                            <span className="item_text">Contact Us</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col-lg-4 col-md-6 col-sm-6">
                <div className="footer_widget">
                  <h3 className="footer_widget_title">Latest Posts</h3>
                  <ul className="blog_small_group unordered_list_block">
                    <li>
                      <a
                        className="blog_small"
                        href="https://www.linkedin.com/company/study-tub"
                      >
                        <iframe
                          src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6989999194182750208"
                          height="118"
                          width={400}
                          frameborder="0"
                          allowfullscreen=""
                          title="Embedded post"
                        ></iframe>
                      </a>
                    </li>
                    <li>
                      <a
                        className="blog_small"
                        href="https://www.linkedin.com/company/study-tub"
                      >
                        <iframe
                          src="https://www.linkedin.com/embed/feed/update/urn:li:share:6996521505324961792"
                          height="118"
                          width={400}
                          frameborder="0"
                          allowfullscreen=""
                          title="Embedded post"
                        ></iframe>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_widget">
          <div className="container">
            <p className="copyright_text text-center mb-0">
              Copyright © 2023 || <b>Study Tub</b> . All rights reserved “For
              the students, by the students.”
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
