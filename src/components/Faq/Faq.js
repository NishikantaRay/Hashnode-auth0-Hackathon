import React from "react";

export default function Faq() {
  const faqData = [
    {
      question: "What subjects are covered on StudyTub?",
      answer:
        "StudyTub offers a wide range of subjects, including engineering, computer science, mathematics, and more. We aim to support BTECH students with a diverse collection of notes.",
    },
    {
      question: "How much does StudyTub cost?",
      answer:
        "StudyTub offers both free and premium plans. While you can access almost all the resources for free, our premium plans provide additional features and resources at a minimal cost.",
    },
    {
      question: "Are the notes on StudyTub regularly updated?",
      answer:
        "Yes, we are committed to keeping our content up-to-date. Our notes and resources are continuously reviewed and updated to ensure that students have access to the most current information.",
    },
    {
      question: "Can I contribute my own notes to StudyTub?",
      answer:
        "Absolutely! We encourage students to contribute their own notes and share their knowledge with the StudyTub community. You can easily upload your notes to help fellow learners.",
    },
    {
      question: "Is there a community or discussion forum on StudyTub?",
      answer:
        "Yes, StudyTub has an active community and discussion forum where you can connect with other students, ask questions, and engage in discussions related to your studies. It's a valuable resource for collaborative learning and support.",
    },
  ];
  return (
    <section class="faq_section section_space_lg">
      <div class="container">
        <div class="section_heading text-center mb-3">
          <div class="row justify-content-center">
            <div class="col col-lg-7">
              <h2 class="heading_text mb-0">
              Ready to 'note'ify your studies with StudyTub?
              </h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col col-lg-10">
            <div class="accordion" id="faq_accordion">
              {faqData.map((item, i) => (
                <div class="accordion-item" key={i}>
                  <div
                    class="accordion-button"
                    role="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse_${i}`}
                    aria-expanded="true"
                  >
                    {item.question}
                  </div>
                  <div
                    id={`collapse_${i}`}
                    class="accordion-collapse collapse show"
                    data-bs-parent="#faq_accordion"
                  >
                    <div class="accordion-body">
                      <p class="mb-0">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
