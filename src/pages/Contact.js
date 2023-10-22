import React from "react";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Multi_Header/Header";

/**
 * Renders the Contact page component.
 * @returns {JSX.Element} The Contact page component.
 */
export default function Contact() {
  const conatctData = {
    page_title: "Contact Us",
    page_description:
      "Questions or feedback? Get in touch with us for prompt assistance. We're here to help you. Looking forward to hearing from you!",
    text_1: "Get Started",
    text_2: "Now",
    details: "Contact Us",
  };
  return (
    <div className="page_wrapper">
      <Navbar />
      <main className="page_content">
        <Header headerData={conatctData} />
        <section className="contact_section section_space_lg">
          <div className="container">
            <div className="row">
              <div className="col col-lg-5">
                <div className="pe-lg-5">
                  <div className="section_heading">
                    <h2 className="heading_text">Contact Us</h2>
                    <p className="heading_description mb-0">
                      Feel free to contact us at our email address for any
                      inquiries or assistance you may need. We look forward to
                      hearing from you!
                    </p>
                  </div>
                  {/* <div className="iconbox_item contact_info_iconbox">
                    <div className="item_icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Call Us</h3>
                      <p className="mb-0">(101) 222 123 456</p>
                      <p className="mb-0">(102) 333 234 674</p>
                    </div>
                  </div> */}
                  <div className="iconbox_item contact_info_iconbox">
                    <div className="item_icon">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Email Address</h3>
                      <p className="mb-0">studytub@nishikanta.tech</p>
                      <p className="mb-0">support@nishikanta.tech</p>
                    </div>
                  </div>
                  <div className="iconbox_item contact_info_iconbox">
                    <div className="item_icon">
                      <i className="fas fa-location-dot"></i>
                    </div>
                    <div className="item_content">
                      <h3 className="item_title">Reach Us</h3>
                      <p className="mb-0">Bhubaneswar,Odisha</p>
                      <p className="mb-0">India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col col-lg-7">
                <div className="gmap_canvas">
                  <iframe
                    id="gmap_canvas_iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119743.52297962956!2d85.82045315!3d20.300884149999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1697908955915!5m2!1sen!2sin"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
