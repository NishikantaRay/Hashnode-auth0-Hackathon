import React from "react";
import FaqD from "../components/Faq/Faq";
import Navbar from "../components/Header/Navbar";
import Header from "../components/Multi_Header/Header";
import Footer from "../components/Footer/Footer";
export default function Faq() {
  const conatctData = {
    page_title: "FAQ",
    page_description:
      "Answers to common questions about our services, policies, and how we can assist you. Find what you need quickly!",
    text_1: "Get Started",
    text_2: "Now",
    details: "FAQ",
  };
  return (
    <div className="page_wrapper">
      <Navbar />
      <main className="page_content">
        <Header headerData={conatctData} />
      </main>
      <FaqD /> <Footer />
    </div>
  );
}
