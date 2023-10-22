import React from "react";

import Header from "../components/Multi_Header/Header";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";
import TeamD from "../components/Team/Team";
export default function Team() {
  const conatctData = {
    page_title: "Team",
    page_description:
      "Meet our talented team, a diverse group dedicated to delivering excellence in every project we undertake.",
    text_1: "Get Started",
    text_2: "Now",
    details: "Team",
  };
  return (
    <div className="page_wrapper">
      <Navbar />
      <main className="page_content">
        <Header headerData={conatctData} />
      </main>
      <TeamD />
      <Footer />
    </div>
  );
}
