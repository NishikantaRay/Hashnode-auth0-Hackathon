import React from "react";
import Header from "../components/Multi_Header/Header";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import Team from "../components/Team/Team";
import Faq from "../components/Faq/Faq";
import Analytics from "../components/Analytics/Analytics";
import AboutUscards from "../components/Cards/AboutusCards/AboutUscards";
/**
 * Renders the About page component.
 * @returns {JSX.Element} The About page component.
 */
export default function About() {
  const headerData = {
    page_title: "Our Story",
    page_description:
      " At StudyTub, we started in 2019 to empower BTECH students with high-quality study materials and make their education more accessible. Our core values remain the same: quality, simplicity, and innovation.",
    text_1: "Get Started",
    text_2: "Now",
    details: "About Us",
  };
  const serviceData1 = [
    {
      icon: "fas fa-book-open",
      heading1: "We Add Sparkle to Study ",
      details:
        "Learning doesn't have to be dull, and StudyTub knows it! We make education exciting, like adding glitter to your study routine.",
    },
    {
      icon: "fas fa-code-branch",
      heading1: "Premium Study Materials",
      details:
        "Your academic journey should be as smooth as butter. We provide high-quality notes, making your learning path a star-studded experience.",
    },
    {
      icon: "fas fa-comment-smile",
      heading1: "Rewards for Stars",
      details:
        "As if excellent notes aren't enough, we also have special rewards for our top contributors. Shine bright like a star and win exciting goodies!",
    },
    {
      icon: "fas fa-user-graduate",
      heading1: "Outsmarting Copycats",
      details:
        "We don't just beat the competition; we outsmart them. Even when someone tries to copy our product, we've got the winning formula!",
    },
  ];
  return (
    <div className="page_wrapper">
      <Navbar />
      <main className="page_content">
        <Header headerData={headerData} />
        <section className="courses_info_section section_space_lg pb-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col col-lg-6">
                <div className="image_widget">
                  <img
                    src="assets/images/about/about.png"
                    alt="Collab – Online Learning Platform"
                  />
                </div>
              </div>
              <div className="col col-lg-6">
                <div className="content_wrap ps-lg-3">
                  <div className="section_heading">
                    <h2 className="heading_text">Join Our Community!</h2>
                    <p className="heading_description mb-0">
                      Are you looking to connect with like-minded individuals
                      and enhance your educational journey and win exciting
                      prizes and certificates?
                    </p>
                  </div>
                  <ul className="info_list unordered_list_block">
                    <li>
                      <i className="fas fa-square"></i>{" "}
                      <span>
                        Share notes, gain insights, and collaborate with peers
                        who share your passion for learning.
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-square"></i>{" "}
                      <span>
                        Contribute to the community by providing the latest
                        notes and resources.
                      </span>
                    </li>
                    <li>
                      <i className="fas fa-square"></i>{" "}
                      <span>
                        Get a chance to win exciting goodies and certificates as
                        one of the top 3 contributors.
                      </span>
                    </li>
                  </ul>
                  <div className="btn_wrap pb-0">
                    <a className="btn btn_dark" href="https://t.me/noteshare1">
                      <span>
                        <small>Join Our Community!</small>{" "}
                        <small>OG Community</small>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="policy_section section_space_lg">
          <div className="container position-relative">
            <div className="section_heading">
              <div className="row align-items-center justify-content-lg-between">
                <div className="col col-lg-6">
                  <h2 className="heading_text mb-0">
                    What Makes StudyTub Stand Out?
                  </h2>
                </div>
                <div className="col col-lg-4">
                  <p className="heading_description mb-0 text-lg-end"></p>
                </div>
              </div>
            </div>
            <div className="row">
              {serviceData1.map((item) => (
                <AboutUscards
                  heading1={item.heading1}
                  sub={item.sub}
                  details={item.details}
                  icon={item.icon}
                />
              ))}
            </div>
          </div>
        </section>
        <Analytics />

        <br />
        <br />
        <Team />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
