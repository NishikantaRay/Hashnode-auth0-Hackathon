import React from "react";
import Heading from "../Heading/Heading";

export default function Team() {
  const teamData = [
    {
      name: "Nishikanta Ray",
      image: "https://avatars.githubusercontent.com/u/62615392?v=4",
      designation: "Fullstack developer ",
      company: "LetsFlo",
      github: "https://github.com/NishikantaRay",
      linkedin: "https://www.linkedin.com/in/nishikantaray1/",
    },
    {
      name: "Sumeet Naik",
      image: "https://avatars.githubusercontent.com/u/25149022?v=4",
      designation: "Fullstack developer",
      company: "McKinley Rice",
      github: "https://github.com/sumeetweb",
      linkedin: "https://www.linkedin.com/in/sumeetnaik19/",
    },
    {
      name: "Anirudh Panda",
      image: "https://avatars.githubusercontent.com/u/66218496?v=4",
      designation: "Tech & Content",
      company: "Inagiffy",
      github: "https://github.com/AnirudhPanda",
      linkedin: "https://www.linkedin.com/in/anirudhpanda/",
    },
  ];
  return (
    <section className="expect_from_course ">
      <div className="container">
        <section className="mentor_section ">
          <Heading text={"Meet the Librarians!!"} clss2={6} />
          <div className="row">
            {teamData?.map((item) => {
              return (
                <div className="col col-lg-4 col-md-6" key={item}>
                  <div className="mentor_item">
                    <div className="mentor_image">
                      <a href={item?.github}>
                        <img
                          src={item?.image}
                          alt="Collab – Online Learning Platform"
                        />
                      </a>
                    </div>
                    <div className="mentor_content">
                      <h3 className="mentor_name">
                        <a href={item?.linkedin}>{item?.name}</a>
                      </h3>
                      <p className="mentor_designation">{item?.designation}</p>
                      <ul className="meta_info_list unordered_list_center mb-0">
                        <li>
                          <i className="fas fa-thumbtack"></i>{" "}
                          <span>{item?.company}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </section>
  );
}
