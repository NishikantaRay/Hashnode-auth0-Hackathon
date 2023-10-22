import React from "react";
import AnchButton from "../Buttons/Anch_button/Anch_button";
import CourseCards from "../Cards/CourseCards/CourseCards";

const serviceData1 = [
  {
    href: "https://notes.studytub.workers.dev/0:/First%20Year/",
    img: "assets/images/service/1st.svg",
    title: "1st Semester",
    description:
      "Where the BTECH journey begins! Dive into the fun world of fundamentals.",
  },
  {
    href: "https://notes.studytub.workers.dev/0:/First%20Year/",
    img: "assets/images/service/2nd.svg",
    title: "2nd Semester",
    description:
      "Level up your knowledge and discover the secrets of your second semester",
  },
  {
    href: "https://notes.studytub.workers.dev/0:/5th%20sem/",
    img: "assets/images/service/5th.svg",
    title: "Practical Skills",
    description:
      "Ready to rock the fifth semester? Let's unravel the mysteries together!",
  },
  {
    href: "https://notes.studytub.workers.dev/0:/6th%20sem/",
    img: "assets/images/service/6th.svg",
    title: "6th Semester",
    description:
      "Gear up for the sixth semester thrill ride and ace your engineering journey.",
  },
];
const serviceData2 = [
  {
    href: "https://notes.studytub.workers.dev/0:/3rd%20Sem/",
    img: "assets/images/service/3rd.svg",
    title: "3rd Semester",
    description:
      "Things are heating up! Explore advanced topics and conquer the third semester.",
  },
  {
    href: "https://notes.studytub.workers.dev/0:/4th%20sem/",
    img: "assets/images/service/4th.svg",
    title: "4th Semester",
    description:
      "Halfway there! Uncover the excitement of your fourth semester adventures.",
  },
  {
    href: "https://notes.studytub.workers.dev/0:/7th%20Sem/",
    img: "assets/images/service/7th.svg",
    title: "7th Semester",
    description: "It's the 'Lucky Number Seven' - where dreams take flight!",
  },
  {
    href: "https://notes.studytub.workers.dev/0:/8th%20Sem/",
    img: "assets/images/service/8th.svg",
    title: "8th Semester",
    description:
      "The final frontier! Prepare to graduate with flying colors in the eighth semester.",
  },
];

export default function Course() {
  return (
    <section className="expect_from_course section_space_lg">
      <div className="container">
        <div className="row">
          <div className="col col-lg-6">
            <div className="section_heading">
              <h2 className="heading_text">What's in Store at StudyTub?</h2>
            </div>
            <div className="row">
              {serviceData1.map((item) => (
                <div className="col col-md-6" key={item}>
                  <CourseCards item={item} />
                </div>
              ))}
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="btn_wrap pt-0 d-none d-lg-flex justify-content-end">
              <AnchButton
                clas="btn border_dark"
                href="https://notes.studytub.workers.dev/0:/"
                text1="Browse Notes"
                text2="Read Notes"
              />
            </div>
            <br />
            <div className="row pt-2 ">
              {serviceData2.map((item) => (
                <div className="col col-md-6" key={item}>
                  <CourseCards item={item} />
                </div>
              ))}
            </div>
            <div className="btn_wrap pb-0 d-block d-lg-none text-center">
              <AnchButton
                clas="btn border_dark"
                href=""
                text1="Explore Courses"
                text2="Explore Courses"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
